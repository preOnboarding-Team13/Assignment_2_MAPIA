import { Controller, Body, Post } from "@nestjs/common";
import { CreateDto } from "./dto/create.dto";
import { AlbumService } from "./album.service";

@Controller("album")
export class AlbumController {
	constructor(private albumService: AlbumService) {}

	@Post()
	async create(@Body() body: CreateDto) {
		const result = await this.albumService.createOne(body);
		return result.records[0].get("a").properties;
	}
}
