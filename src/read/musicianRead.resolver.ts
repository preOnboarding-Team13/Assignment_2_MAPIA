import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Album, Musician, Song } from "src/read/graphql/graphql.schema";
import { ReadService } from "./read.service";

@Resolver(() => Musician)
export class MusicianRead {
	constructor(private readonly readService: ReadService) {}

	@Query(() => [Musician])
	async readMusician() {
		return this.readService.readMusician();
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
