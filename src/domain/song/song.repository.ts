import { Injectable } from "@nestjs/common";
import { Neo4jService } from "src/neo4j/neo4j.service";

@Injectable()
export class SongRepository {
	constructor(private neo4jService: Neo4jService) {}

	createOne(body) {
		return this.neo4jService
			.write(
				`create(s:SONG {
                    id: apoc.create.uuid(), name: '${body.name}', runningTime: toInteger(${body.runningTime})}) return s`,
				{}
			)
			.then((result) => {
				return result.records[0].get("s").properties;
			});
	}

	findOne(songId) {
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
}
