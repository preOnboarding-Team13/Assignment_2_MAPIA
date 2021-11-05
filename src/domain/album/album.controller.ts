import { Controller, Body, Post } from "@nestjs/common";
import { CreateDto } from "./dto/create.dto";
import { AlbumService } from "./album.service";
import { SuccessResponse } from "src/global/common/successResponse";
import { SuccessCode } from "src/global/common/successCode";

@Controller("albums")
export class AlbumController {
	constructor(private albumService: AlbumService) {}

	@Post()
	async create(@Body() body: CreateDto) {
		const result = await this.albumService.createOne(body);
		return SuccessResponse.response(SuccessCode.createAlbum(), result);
	}
}
