import { Injectable } from "@nestjs/common";
import { Neo4jService } from "src/neo4j/neo4j.service";
import { Song } from "../entity/song.entity";
// import * as DataLoader from "dataloader";
// import { NestDataLoader } from "nestjs-dataloader";

@Injectable()
export class HaveSongDataLoader {
	// constructor(private readonly neo4jService: Neo4jService) {}
	// generateDataLoader() {
	// 	return new DataLoader<any, any>(async (musician_id) => {
	// 		console.log(musician_id);
	// 		const loader = await this.neo4jService
	// 			.read(
	// 				`MATCH (m:MUSICIAN)-[HAVE]->(s:SONG) WHERE m.id = [${musician_id}]  RETURN s`
	// 			)
	// 			.then((res) =>
	// 				res.records.map((row) => new Song(row.get("s")).toJson())
	// 			);
	// 		loader.map((element) => console.log(element));
	// 		return null;
	// 	});
	// }
}
