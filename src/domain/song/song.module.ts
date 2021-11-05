import { Module } from "@nestjs/common";
import { SongController } from "./song.controller";
import { SongRepository } from "./song.repository";
import { SongService } from "./song.service";

@Module({
	controllers: [SongController],
	providers: [SongService, SongRepository]
})
export class SongModule {}
