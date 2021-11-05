import { Injectable } from "@nestjs/common";
import { Neo4jService } from "src/neo4j/neo4j.service";
import { ConnectAlbumToSong } from "./dto/ConnectAlbumToSong.dto";
import { ConnectMusicianToSong } from "./dto/ConnectMusicianToSong.dto";

@Injectable()
export class RelationRepository {
	constructor(private neo4jService: Neo4jService) {}

	connectMusicianToSong(data: ConnectMusicianToSong) {
		const { musicianId, songId } = data;
		return this.neo4jService.write(
			`MATCH (m:MUSICIAN), (s:SONG)
            WHERE m.id = '${musicianId}' and s.id= '${songId}'
            CREATE (m)-[r:HAVE]->(s)`,
			{}
		);
	}

	connectAlbumToSong(data: ConnectAlbumToSong) {
		const { albumId, songId } = data;
		return this.neo4jService.write(
			`MATCH (a:ALBUM), (s:SONG)
            WHERE a.id = '${albumId}' and s.id= '${songId}'
            CREATE (a)-[r:CONTAIN]->(s)`,
			{}
		);
	}

	unconnectMusicianToSong(musicianId: string, songId: string) {
		return this.neo4jService
			.write(
				`MATCH (m:MUSICIAN)-[r:HAVE]->(s:SONG)
				WHERE m.id = '${musicianId}' and s.id= '${songId}'
				DELETE r RETURN r`,
				{}
			)
			.then((result) => {
				return result.records[0];
			});
	}

	unconnectAlbumToSong(albumId: string, songId: string) {
		return this.neo4jService
			.write(
				`MATCH (a:ALBUM)-[r:CONTAIN]->(s:SONG)
				WHERE a.id = '${albumId}' and s.id= '${songId}'
				DELETE r RETURN r`,
				{}
			)
			.then((result) => {
				return result.records[0];
			});
	}
}
