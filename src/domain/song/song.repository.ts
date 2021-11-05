import { Injectable } from "@nestjs/common";
import { Neo4jService } from "src/neo4j/neo4j.service";

@Injectable()
export class SongRepository {
	constructor(private neo4jService: Neo4jService) {}

	createOne(body) {
		const result = this.neo4jService
			.write(
				`create(s:SONG {name: '${body.name}', runningTime: toInteger(${body.runningTime})}) return s`,
				{}
			)
			.then((result) => {
				return result.records[0].get("s").properties;
			});
		return result;
	}
}
