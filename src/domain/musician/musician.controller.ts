import {
	Body,
	ClassSerializerInterceptor,
	Controller,
	Delete,
	Param,
	Patch,
	Post,
	UseInterceptors
} from "@nestjs/common";
import { MusicianService } from "./musician.service";
import { RequestMusician } from "./dto/RequestMusician.dto";
import { SuccessCode } from "src/global/common/successCode";
import { SuccessResponse } from "src/global/common/successResponse";
import { UpdateMusician } from "./dto/UpdateMusician.dto";

@UseInterceptors(ClassSerializerInterceptor)
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
	async deleteMusician(@Param("musicianId") musicianId: string) {
		await this.musicianService.deleteOne(musicianId);
		return SuccessResponse.response(SuccessCode.deleteMusician());
	}
	@Patch(":musicianId")
	async update(
		@Body() data: UpdateMusician,
		@Param("musicianId") musicianId: string
	): Promise<SuccessResponse> {
		return SuccessResponse.response(
			SuccessCode.updateMusician(),
			await this.musicianService.updateOne(data, musicianId)
		);
	}
}
