import { Body, Controller, Delete, Param, Post } from "@nestjs/common";
import { MusicianService } from "./musician.service";
import { RequestMusician } from "./dto/RequestMusician.dto";
import { SuccessCode } from "src/global/common/successCode";
import { SuccessResponse } from "src/global/common/successResponse";

@Controller("musicians")
export class MusicianController {
	constructor(private musicianService: MusicianService) {}

	@Post()
	async create(@Body() data: RequestMusician): Promise<SuccessResponse> {
		return SuccessResponse.response(
			SuccessCode.createMusician(),
			await this.musicianService.createOne(data)
		);
	}
	@Delete(":musicianId")
	async deleteMSong(@Param("musicianId") musicianId: string) {
		console.log("musicianId", musicianId);
		const request = await this.musicianService.deleteOne(musicianId);
		if (request) {
			console.log("삭제 함");
		} else {
			console.log("해당 id 가 없음");
		}
		if (request) return request;
		return 1;
	}
}
