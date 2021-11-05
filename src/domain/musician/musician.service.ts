import { Injectable } from "@nestjs/common";
import { RequestMusician } from "./dto/RequestMusician.dto";
import { NotFoundMusicianException } from "./exception/NotFoundMusicianException";
import { MusicianRepository } from "./musician.repository";

@Injectable()
export class MusicianService {
	constructor(private musicianRepository: MusicianRepository) {}
	createOne(data: RequestMusician) {
		return this.musicianRepository.createOne(data);
	}
	async deleteOne(musicianId: string) {
		const misician = await this.musicianRepository.deleteOne(musicianId);
		if (misician === undefined) throw new NotFoundMusicianException();
	}
}
