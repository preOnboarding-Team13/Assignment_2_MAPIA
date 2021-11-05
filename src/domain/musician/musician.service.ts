import { Injectable } from "@nestjs/common";
import { RequestMusician } from "./dto/RequestMusician.dto";
import { MusicianRepository } from "./musician.repository";

@Injectable()
export class MusicianService {
	constructor(private musicianRepository: MusicianRepository) {}
	createOne(data: RequestMusician) {
		return this.musicianRepository.createOne(data);
	}
	deleteOne(musicianId: string) {
		return this.musicianRepository.deleteOne(musicianId);
	}
}
