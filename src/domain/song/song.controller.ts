import { Body, Controller, Delete, Param, Patch, Post } from "@nestjs/common";
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

	@Delete(":songId")
	async deleteSong(@Param("songId") songId: string) {
		await this.songService.deleteOne(songId);
		return SuccessResponse.response(SuccessCode.deleteSong());
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
