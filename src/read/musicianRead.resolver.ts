import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Album, Musician, Song } from "src/read/graphql/graphql.schema";
import { ReadService } from "./read.service";

@Resolver(() => Musician)
export class MusicianRead {
	constructor(private readonly readService: ReadService) {}

	@Query(() => [Musician])
	async readAllMusician() {
		return this.readService.readAllMusician();
	}

	@Query(() => [Musician])
	async readMusician(@Args("id") id: string) {
		return this.readService.readMusician(id);
	}

	@ResolveField(() => [Song])
	song(@Parent() musician: Musician) {
		return this.readService.readHaveSong(musician);
	}

	@ResolveField(() => [Album])
	album(@Parent() musician: Musician) {
		return this.readService.readHaveContainAlbum(musician);
	}
}
