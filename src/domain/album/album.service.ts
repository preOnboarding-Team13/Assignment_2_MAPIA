import { Injectable } from "@nestjs/common";
import { AlbumRepository } from "./album.repository";
import { RequestAlbum } from "./dto/RequestAlbum.dto";

@Injectable()
export class AlbumService {
	constructor(private albumRepository: AlbumRepository) {}

	createOne(data: RequestAlbum) {
		return this.albumRepository.createOne(data);
	}
}
