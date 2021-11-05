import { Injectable } from "@nestjs/common";
import { Neo4jService } from "src/neo4j/neo4j.service";

@Injectable()
export class RelationRepository {
	constructor(private neo4jService: Neo4jService) {}

	createMSong(body) {
		return this.neo4jService.write(
			`MATCH (m:MUSICIAN), (s:SONG)
            WHERE m.id = '${body.musicianId}' and s.id= '${body.songId}'
            CREATE (m)-[r:HAVE]->(s)`,
			{}
		);
	}

	createASong(body) {
		return this.neo4jService.write(
			`MATCH (a:ALBUM), (s:SONG)
            WHERE a.id = '${body.albumId}' and s.id= '${body.songId}'
            CREATE (a)-[r:CONTAIN]->(s)`,
			{}
		);
	}

	deleteMSong(musicianId, songId) {
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

	deleteASong(albumId, songId) {
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
