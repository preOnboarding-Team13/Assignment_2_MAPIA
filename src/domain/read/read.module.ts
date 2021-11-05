import { Module } from "@nestjs/common";
import { ReadService } from "./read.service";
import { AlbumRead } from "./resolver/albumRead.resolver";
import { MusicianRead } from "./resolver/musicianRead.resolver";
import { SongRead } from "./resolver/songRead.resolver";

@Module({
	providers: [MusicianRead, SongRead, AlbumRead, ReadService]
})
export class ReadModule {}
