import { ClassSerializerInterceptor, UseInterceptors } from "@nestjs/common";
import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Album, Musician, Song } from "src/read/graphql/graphql.schema";
import { ReadService } from "./read.service";

@UseInterceptors(ClassSerializerInterceptor)
@Resolver(() => Song)
export class SongRead {
	constructor(private readonly readService: ReadService) {}

	@Query(() => [Song])
	async readAllSong() {
		return this.readService.readAllSong();
	}

	@Query(() => [Song])
	async readSong(@Args("id", { type: () => String }) id: string) {
		return this.readService.readSong(id);
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
