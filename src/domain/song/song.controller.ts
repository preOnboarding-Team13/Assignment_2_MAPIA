import { Body, Controller, Post } from "@nestjs/common";
import { SuccessCode } from "src/global/common/SuccessCode";
import { SuccessResponse } from "src/global/common/SuccessResponse";
import { CreateDto } from "./dto/create.dto";
import { SongService } from "./song.service";

@Controller("song")
export class SongController {
	constructor(private songService: SongService) {}

	@Post()
	async create(@Body() body: CreateDto) {
		const result = await this.songService.createOne(body);
		return SuccessResponse.response(SuccessCode.createSong(), result);
	}
}
