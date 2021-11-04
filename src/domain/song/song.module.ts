import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { Neo4jModule } from "src/neo4j/neo4j.module";
import { SongController } from "./song.controller";
import { SongService } from "./song.service";

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: [".env"], isGlobal: true }),
		Neo4jModule.forRoot({
			scheme: "neo4j+s",
			host: process.env.NEO4J_HOST,
			username: process.env.NEO4J_USERNAME,
			password: process.env.NEO4J_PASSWORD
		})
	],
	controllers: [SongController],
	providers: [SongService]
})
export class SongModule {}
