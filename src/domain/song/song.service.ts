import { Injectable } from "@nestjs/common";
import { RequestSong } from "./dto/RequestSong.dto";
import { NotFoundSongException } from "./exception/NotFoundSongException";
import { SongRepository } from "./song.repository";

@Injectable()
export class SongService {
	constructor(private songRepository: SongRepository) {}

	createOne(data: RequestSong) {
		return this.songRepository.createOne(data);
	}

	async deleteOne(songId: string) {
		const song = await this.songRepository.deleteOne(songId);
		if (song === undefined) throw new NotFoundSongException();
	}
}
