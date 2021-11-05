import { Module } from "@nestjs/common";
import { AlbumRead } from "./albumRead.resolver";
import { MusicianRead } from "./musicianRead.resolver";
import { ReadService } from "./read.service";
import { SongRead } from "./songRead.resolver";

@Module({
	providers: [MusicianRead, SongRead, AlbumRead, ReadService]
})
export class ReadModule {}
