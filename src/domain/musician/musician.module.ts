import { Module } from "@nestjs/common";
import { MusicianController } from "./musician.controller";
import { MusicianService } from "./musician.service";
import { MusicianRepository } from "./musician.repository";

@Module({
	controllers: [MusicianController],
	providers: [MusicianService, MusicianRepository]
})
export class MusicianModule {}
