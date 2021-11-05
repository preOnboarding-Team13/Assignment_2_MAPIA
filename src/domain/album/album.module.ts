import { Module } from "@nestjs/common";
import { AlbumController } from "./album.controller";
import { AlbumRepository } from "./album.repository";
import { AlbumService } from "./album.service";

@Module({
	controllers: [AlbumController],
	providers: [AlbumService, AlbumRepository]
})
export class AlbumModule {}
