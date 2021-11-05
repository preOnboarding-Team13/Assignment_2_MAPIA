import { Controller, Body, Post, Delete, Param } from "@nestjs/common";
import { RequestAlbum } from "./dto/RequestAlbum.dto";
import { AlbumService } from "./album.service";
import { SuccessResponse } from "src/global/common/successResponse";
import { SuccessCode } from "src/global/common/successCode";

@Controller("albums")
export class AlbumController {
	constructor(private albumService: AlbumService) {}

	@Post()
	async create(@Body() body: RequestAlbum): Promise<SuccessResponse> {
		return SuccessResponse.response(
			SuccessCode.createAlbum(),
			await this.albumService.createOne(body)
		);
	}

	@Delete(":albumId")
	async deleteAlbum(@Param("albumId") albumId: string) {
		await this.albumService.deleteOne(albumId);
		return SuccessResponse.response(SuccessCode.deleteAlbum());
	}
}
