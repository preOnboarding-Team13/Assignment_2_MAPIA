import { BadRequestException, Injectable } from "@nestjs/common";
import { RequestMusician } from "./dto/RequestMusician.dto";
import { UpdateMusician } from "./dto/UpdateMusician.dto";
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
	async updateOne(data: UpdateMusician, musicianId: string) {
		const queryArr = [];
		for (const [key, value] of Object.entries(data)) {
			if (value) {
				if (typeof value === "number") {
					queryArr.push(`m.${key} = ${value}`);
				} else {
					queryArr.push(`m.${key} = '${value}'`);
				}
			}
		}
		if (queryArr.length === 0) throw new BadRequestException();
		// find musician
		const musician = await this.musicianRepository.findOne(musicianId);
		if (musician === undefined) throw new NotFoundMusicianException();
		return this.musicianRepository.updateOne(queryArr, musicianId);
	}
}
