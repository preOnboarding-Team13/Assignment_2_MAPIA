import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Album, Musician, Song } from "src/read/graphql/graphql.schema";
import { ReadService } from "./read.service";

@Resolver(() => Song)
export class SongRead {
	constructor(private readonly readService: ReadService) {}

	@Query(() => [Song])
	async readSong() {
		return this.readService.readSong();
	}

	@ResolveField(() => [Musician])
	musician(@Parent() song: Song) {
		return this.readService.readHaveMusician(song);
	}

	@ResolveField(() => [Album])
	album(@Parent() song: Song) {
		return this.readService.readContainAlbum(song);
	}
}
