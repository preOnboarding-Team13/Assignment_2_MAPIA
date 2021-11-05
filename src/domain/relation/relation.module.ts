import { Module } from "@nestjs/common";
import { RelationService } from "./relation.service";
import { RelationController } from "./relation.controller";
import { RelationRepository } from "./relation.repository";
import { ConfigModule } from "@nestjs/config";
import { Neo4jModule } from "src/neo4j/neo4j.module";
import { MusicianRepository } from "../musician/musician.repository";
import { AlbumRepository } from "../album/album.repository";
import { SongRepository } from "../song/song.repository";

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
	providers: [
		RelationService,
		RelationRepository,
		MusicianRepository,
		AlbumRepository,
		SongRepository
	],
	controllers: [RelationController]
})
export class RelationModule {}
