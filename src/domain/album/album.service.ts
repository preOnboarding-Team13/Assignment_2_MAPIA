import { Injectable } from "@nestjs/common";
import { Neo4jService } from "src/neo4j/neo4j.service";

@Injectable()
export class AlbumService {
	constructor(private neo4jService: Neo4jService) {}

	createOne(body) {
		return this.neo4jService.write(
			`create (a:ALBUM {name: '${body.name}', releaseDate: '${body.releaseDate}'}) return a1`,
			{}
		);
	}
}
