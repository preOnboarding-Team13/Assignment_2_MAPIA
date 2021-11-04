import { DynamicModule, Global, Module, Options } from "@nestjs/common";
import { Neo4jService } from "./neo4j.service";
import { Neo4jConfig } from "src/neo4j-config.interface";
import { NEO4J_CONFIG, NEO4J_DRIVER } from "./neo4j.constants";
import { createDriver } from "./neo4j.util";

@Global()
@Module({})
export class Neo4jModule {
	// eslint-disable-next-line @typescript-eslint/ban-types
	static forRoot(config: Neo4jConfig): DynamicModule {
		return {
			module: Neo4jModule,
			providers: [
				Neo4jService,
				{
					provide: NEO4J_CONFIG,
					useValue: config
				},
				{
					provide: NEO4J_DRIVER,
					inject: [NEO4J_CONFIG],
					useFactory: async (config: Neo4jConfig) =>
						createDriver(config)
				}
			],
			exports: [Neo4jService]
		};
	}
}
