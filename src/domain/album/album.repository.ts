import { Injectable } from "@nestjs/common";
import { Neo4jService } from "src/neo4j/neo4j.service";
import { RequestAlbum } from "./dto/RequestAlbum.dto";

@Injectable()
export class AlbumRepository {
	constructor(private neo4jService: Neo4jService) {}

	createOne(data: RequestAlbum) {
		const { name, releaseDate } = data;
		return this.neo4jService
			.write(
				`CREATE (a:ALBUM {
                    id: apoc.create.uuid(), 
                    name: '${name}', 
                    releaseDate: '${releaseDate}'
                }) RETURN a`,
				{}
			)
			.then((result) => {
				return result.records[0].get("a").properties;
			});
	}

	findOne(albumId: string) {
		return this.neo4jService
			.read(
				`MATCH (a:ALBUM) 
				WHERE a.id = '${albumId}'
				RETURN a`,
				{}
			)
			.then((result) => {
				return result.records[0]?.get("a");
			});
	}

	deleteOne(albumId: string) {
		return this.neo4jService
			.write(
				`MATCH (a:ALBUM {id: '${albumId}'})
				DETACH DELETE a 
				RETURN a`
			)
			.then((result) => {
				return result.records[0]?.get("a");
			});
	}
}
