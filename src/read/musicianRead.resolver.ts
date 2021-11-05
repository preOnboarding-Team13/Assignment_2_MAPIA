import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Album, Musician, Song } from "src/read/graphql/graphql.schema";
import { ReadService } from "./read.service";
// import { Loader } from "nestjs-dataloader";
// import * as DataLoader from "dataloader";
import { HaveSongDataLoader } from "./loader/haveSongDataLoader.loader";

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

	// data-loader 전
	@ResolveField(() => [Song])
	song(@Parent() musician: Musician) {
		return this.readService.readHaveSong(musician);
	}

	// @ResolveField(() => [Song])
	// song(
	// 	@Parent() musician: Musician,
	// 	@Loader(HaveSongDataLoader.name)
	// 	locationGroupDataLoader: DataLoader<any, any>
	// ) {
	// 	console.log("hello");
	// 	console.log(musician);
	// 	return locationGroupDataLoader.load(musician);
	// }

	@ResolveField(() => [Album])
	album(@Parent() musician: Musician) {
		return this.readService.readHaveContainAlbum(musician);
	}
}
