import { Injectable } from "@nestjs/common";
import { RequestMusician } from "./dto/RequestMusician.dto";
import { ResponseMusician } from "./dto/ResponseMusician.dto";
import { MusicianRepository } from "./musician.repository";

@Injectable()
export class MusicianService {
	constructor(private musicianRepository: MusicianRepository) {}
	createOne(data: RequestMusician): Promise<ResponseMusician> {
		return this.musicianRepository.createOne(data);
	}
}
