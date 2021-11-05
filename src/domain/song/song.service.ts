import { Injectable } from "@nestjs/common";
import { RequestSong } from "./dto/RequestSong.dto";
import { SongRepository } from "./song.repository";

@Injectable()
export class SongService {
	constructor(private songRepository: SongRepository) {}

	createOne(data: RequestSong) {
		return this.songRepository.createOne(data);
	}
}
