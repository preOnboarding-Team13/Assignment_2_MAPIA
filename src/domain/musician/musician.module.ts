import { Module } from "@nestjs/common";
import { Neo4jModule } from "src/neo4j/neo4j.module";
import { MusicianController } from "./musician.controller";
import { MusicianService } from "./musician.service";
import { MusicianRepository } from "./musician.repository";

@Module({
	imports: [Neo4jModule],
	controllers: [MusicianController],
	providers: [MusicianService, MusicianRepository]
})
export class MusicianModule {}
