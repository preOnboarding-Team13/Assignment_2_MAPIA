import { Injectable } from "@nestjs/common";
import { AlbumRepository } from "./album.repository";
import { RequestAlbum } from "./dto/RequestAlbum.dto";
import { UpdateAlbum } from "./dto/UpdateAlbum.dto";
import { NotFoundAlbumException } from "./exception/NotFoundAlbumException";

@Injectable()
export class AlbumService {
	constructor(private albumRepository: AlbumRepository) {}

	createOne(data: RequestAlbum) {
		return this.albumRepository.createOne(data);
	}
	async deleteOne(albumId: string) {
		const album = await this.albumRepository.deleteOne(albumId);
		if (album === undefined) throw new NotFoundAlbumException();
	}

	async updateOne(data: UpdateAlbum, albumId: string) {
		const queryArr = [];
		for (const [key, value] of Object.entries(data)) {
			if (value) {
				if (typeof value === "number") {
					queryArr.push(`a.${key} = ${value}`);
				} else {
					queryArr.push(`a.${key} = '${value}'`);
				}
			}
		}
		if (queryArr.length === 0) throw new Error();
		// find album
		const album = await this.albumRepository.findOne(albumId);
		if (album === undefined) throw new NotFoundAlbumException();
		return this.albumRepository.updateOne(queryArr, albumId);
	}
}
