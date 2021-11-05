import { Injectable } from "@nestjs/common";
import { AlbumRepository } from "./album.repository";

@Injectable()
export class AlbumService {
	constructor(private albumRepository: AlbumRepository) {}

	createOne(body) {
		return this.albumRepository.createOne(body);
	}
}
