import { Injectable } from "@nestjs/common";
import { Neo4jService } from "src/neo4j/neo4j.service";
import { RequestMusician } from "./dto/RequestMusician.dto";
import { ResponseMusician } from "./dto/ResponseMusician.dto";

@Injectable()
export class MusicianRepository {
	constructor(private neo4jService: Neo4jService) {}

	createOne(data: RequestMusician): Promise<ResponseMusician> {
		const { name, company } = data;
		return this.neo4jService
			.write(
				`create(m:MUSICIAN {
                    id: apoc.create.uuid(), 
                    name: '${name}', 
                    company: '${company}'
                }) return m`,
				{}
			)
			.then((res) => {
				return res.records[0].get("m").properties;
			});
	}
}
