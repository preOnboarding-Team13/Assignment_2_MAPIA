import { Injectable } from "@nestjs/common";
import { Neo4jService } from "src/neo4j/neo4j.service";
import { RequestSong } from "./dto/RequestSong.dto";

@Injectable()
export class SongRepository {
	constructor(private neo4jService: Neo4jService) {}

	createOne(data: RequestSong) {
		const { name, genre, runningTime } = data;
		return this.neo4jService
			.write(
				`CREATE(s:SONG {
                    id: apoc.create.uuid(), 
					name: '${name}', 
					genre: '${genre}',
					runningTime: toInteger(${runningTime})
				}) RETURN s`,
				{}
			)
			.then((result) => {
				return result.records[0].get("s").properties;
			});
	}

	findOne(songId: string) {
		return this.neo4jService
			.read(
				`MATCH (s: SONG) 
				WHERE s.id = '${songId}'
				RETURN s`,
				{}
			)
			.then((result) => {
				return result.records[0]?.get("s");
			});
	}

	updateOne(queryArr: string[], songId: string) {
		const query = `MATCH (s:SONG {id:'${songId}'}) SET ${queryArr.join(
			", "
		)} RETURN s`;
		return this.neo4jService.write(query, {}).then((result) => {
			return result.records[0].get("s").properties;
		});
	}
}
