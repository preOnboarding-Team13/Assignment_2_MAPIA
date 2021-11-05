import { Controller, Body, Post, Patch, Param } from "@nestjs/common";
import { RequestAlbum } from "./dto/RequestAlbum.dto";
import { AlbumService } from "./album.service";
import { SuccessResponse } from "src/global/common/successResponse";
import { SuccessCode } from "src/global/common/successCode";
import { UpdateAlbum } from "./dto/UpdateAlbum.dto";

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

	@Patch(":albumId")
	async update(
		@Body() data: UpdateAlbum,
		@Param("albumId") albumId: string
	): Promise<SuccessResponse> {
		return SuccessResponse.response(
			SuccessCode.updateAlbum(),
			await this.albumService.updateOne(data, albumId)
		);
	}
}
