import { Injectable } from "@nestjs/common";
import { AlbumRepository } from "./album.repository";
import { RequestAlbum } from "./dto/RequestAlbum.dto";
import { NotFoundAlbumException } from "./exception/NotFoundAlbumException";

@Injectable()
export class AlbumService {
	constructor(private albumRepository: AlbumRepository) {}

	createOne(data: RequestAlbum) {
		return this.albumRepository.createOne(data);
	}
	async deleteOne(albumId: string){
		const album = await this.albumRepository.deleteOne(albumId);
		if (album === undefined) throw new NotFoundAlbumException();
	}
}
