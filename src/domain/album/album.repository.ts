import { Injectable } from "@nestjs/common";
import { Neo4jService } from "src/neo4j/neo4j.service";

@Injectable()
export class AlbumRepository {
	constructor(private neo4jService: Neo4jService) {}

	createOne(body) {
		const result = this.neo4jService
			.write(
				`create (a:ALBUM {
                    id: apoc.create.uuid(), 
                    name: '${body.name}', 
                    releaseDate: '${body.releaseDate}'
                }) return a`,
				{}
			)
			.then((result) => {
				return result.records[0].get("a").properties;
			});
		return result;
	}

	findOne(albumId) {
		return this.neo4jService
			.read(
				`MATCH (a:ALBUM) 
				WHERE a.id = '${albumId}'
				RETURN a`,
				{}
			)
			.then((result) => {
				return result.records[0].get("a");
			});
	}
}
