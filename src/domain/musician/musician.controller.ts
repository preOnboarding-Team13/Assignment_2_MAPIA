import { Body, Controller, Post } from "@nestjs/common";
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
}
