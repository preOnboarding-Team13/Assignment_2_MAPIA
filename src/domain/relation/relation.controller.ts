import { Controller, Post, Body } from "@nestjs/common";
import { RelationService } from "./relation.service";
import { CreateMSongDto } from "./dto/createMSong.dto";
import { SuccessResponse } from "src/global/common/SuccessResponse";
import { SuccessCode } from "src/global/common/SuccessCode";
import { CreateASongDto } from "./dto/createASong.dto";

@Controller("relation")
export class RelationController {
	constructor(private relationService: RelationService) {}

	@Post("m-to-s")
	async createMSong(@Body() body: CreateMSongDto) {
		await this.relationService.createMSong(body);
		return SuccessResponse.response(SuccessCode.createRelationship());
	}

	@Post("a-to-s")
	async createASong(@Body() body: CreateASongDto) {
		await this.relationService.createASong(body);
		return SuccessResponse.response(SuccessCode.createRelationship());
	}
}
