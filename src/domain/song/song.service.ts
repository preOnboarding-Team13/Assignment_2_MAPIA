import { Injectable } from "@nestjs/common";
import { RequestSong } from "./dto/RequestSong.dto";
import { UpdateSong } from "./dto/UpdateSong.dto";
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
	async updateOne(data: UpdateSong, songId: string) {
		const queryArr = [];
		for (const [key, value] of Object.entries(data)) {
			if (value) {
				if (typeof value === "number") {
					queryArr.push(`s.${key} = ${value}`);
				} else {
					queryArr.push(`s.${key} = '${value}'`);
				}
			}
		}
		if (queryArr.length === 0) throw new Error();
		// find song
		const song = await this.songRepository.findOne(songId);
		if (song === undefined) throw new NotFoundSongException();
		return this.songRepository.updateOne(queryArr, songId);
	}
}
