import { Injectable } from "@nestjs/common";
import { SongRepository } from "./song.repository";

@Injectable()
export class SongService {
	constructor(private songRepository: SongRepository) {}

	createOne(body) {
		return this.songRepository.createOne(body);
	}
}
