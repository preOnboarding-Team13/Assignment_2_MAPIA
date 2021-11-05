import { Injectable } from "@nestjs/common";
import { AlbumRepository } from "./album.repository";
import { NotFoundAlbumException } from "../album/exception/NotFoundAlbumException";
import { UpdateAlbum } from "./dto/UpdateAlbum.dto";

@Injectable()
export class AlbumService {
	constructor(private albumRepository: AlbumRepository) {}

	createOne(body) {
		return this.albumRepository.createOne(body);
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
