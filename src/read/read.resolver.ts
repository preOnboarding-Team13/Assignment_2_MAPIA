import { Query, Resolver } from "@nestjs/graphql";
import { Album, Musician, Song } from "src/read/graphql/graphql.schema";
import { ReadService } from "./read.service";

@Resolver()
export class ReadResolver {
	constructor(private readonly readService: ReadService) {}

	@Query(() => [Song])
	async readSong() {
		return this.readService.readSong();
	}

	@Query(() => [Musician])
	async readMusician() {
		return this.readService.readMusician();
	}

	@Query(() => [Album])
	async readAlbum() {
		return this.readService.readAlbum();
	}
}
