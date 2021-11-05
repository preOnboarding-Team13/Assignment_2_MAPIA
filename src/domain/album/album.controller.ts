import { Controller, Body, Post } from "@nestjs/common";
import { CreateDto } from "./dto/create.dto";
import { AlbumService } from "./album.service";
import { SuccessResponse } from "src/global/common/SuccessResponse";
import { SuccessCode } from "src/global/common/SuccessCode";

@Controller("album")
export class AlbumController {
	constructor(private albumService: AlbumService) {}

	@Post()
	async create(@Body() body: CreateDto) {
		const result = await this.albumService.createOne(body);
		return SuccessResponse.response(SuccessCode.createAlbum(), result);
	}
}
