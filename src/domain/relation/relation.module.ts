import { Module } from "@nestjs/common";
import { RelationService } from "./relation.service";
import { RelationController } from "./relation.controller";
import { RelationRepository } from "./relation.repository";
import { MusicianRepository } from "../musician/musician.repository";
import { AlbumRepository } from "../album/album.repository";
import { SongRepository } from "../song/song.repository";

@Module({
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
