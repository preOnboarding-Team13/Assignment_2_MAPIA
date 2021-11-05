import { Injectable } from "@nestjs/common";
import { RelationRepository } from "./relation.repository";

@Injectable()
export class RelationService {
	constructor(private relationRepository: RelationRepository) {}

	createMSong(body) {
		return this.relationRepository.createMSong(body);
	}

	createASong(body) {
		return this.relationRepository.createASong(body);
	}

	deleteMSong(musicianId, songId) {
		return this.relationRepository.deleteMSong(musicianId, songId);
	}

	deleteASong(albumId, songId) {
		return this.relationRepository.deleteASong(albumId, songId);
	}
}
