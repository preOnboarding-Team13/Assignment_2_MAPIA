import { Injectable } from "@nestjs/common";
import { Neo4jService } from "./neo4j/neo4j.service";

@Injectable()
export class AppService {
	constructor(private readonly neo4jService: Neo4jService) {}

	async getHello(): Promise<string> {
		const result = await this.neo4jService.write(
			"create(m1:MUSICIAN {name: '아이유', company: 'SM'}) return m1",
			{}
		);
		console.log(result);
		return `Hello World!`;
	}
}
