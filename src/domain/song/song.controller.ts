import { Body, Controller, Post, Patch, Param } from "@nestjs/common";
import { SuccessCode } from "src/global/common/successCode";
import { SuccessResponse } from "src/global/common/successResponse";
import { RequestSong } from "./dto/RequestSong.dto";
import { UpdateSong } from "./dto/UpdateSong.dto";
import { SongService } from "./song.service";

@Controller("songs")
export class SongController {
	constructor(private songService: SongService) {}

	@Post()
	async create(@Body() body: RequestSong): Promise<SuccessResponse> {
		return SuccessResponse.response(
			SuccessCode.createSong(),
			await this.songService.createOne(body)
		);
	}

	@Patch(":songId")
	async update(
		@Body() data: UpdateSong,
		@Param("songId") songId: string
	): Promise<SuccessResponse> {
		return SuccessResponse.response(
			SuccessCode.updateSong(),
			await this.songService.updateOne(data, songId)
		);
	}
}
