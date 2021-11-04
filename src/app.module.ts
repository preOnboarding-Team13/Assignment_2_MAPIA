import { Module } from "@nestjs/common";
import { Neo4jModule } from "./neo4j/neo4j.module";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ReadModule } from "./read/read.module";
import { join } from "path";

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: [".env"], isGlobal: true }),
		GraphQLModule.forRoot({
			typePaths: ["./**/*.graphql"],
			buildSchemaOptions: {
				dateScalarMode: "isoDate",
				numberScalarMode: "integer"
			}
		}),
		Neo4jModule.forRoot({
			scheme: "neo4j+s",
			host: process.env.NEO4J_HOST,
			username: process.env.NEO4J_USERNAME,
			password: process.env.NEO4J_PASSWORD
		}),
		ReadModule
	]
})
export class AppModule {}
