import { Controller, Post, Body, Delete } from "@nestjs/common";
import { RelationService } from "./relation.service";
import { MusicianSongDto } from "./dto/musicianSong.dto";
import { SuccessResponse } from "src/global/common/SuccessResponse";
import { SuccessCode } from "src/global/common/SuccessCode";
import { AlbumSongDto } from "./dto/albumSong.dto";

@Controller("relation")
export class RelationController {
	constructor(private relationService: RelationService) {}

	@Post("m-to-s")
	async createMSong(@Body() body: MusicianSongDto) {
		await this.relationService.createMSong(body);
		return SuccessResponse.response(SuccessCode.createRelationship());
	}

	@Post("a-to-s")
	async createASong(@Body() body: AlbumSongDto) {
		await this.relationService.createASong(body);
		return SuccessResponse.response(SuccessCode.createRelationship());
	}

	@Delete("m-to-s")
	async deleteMSong(@Body() body: MusicianSongDto) {
		await this.relationService.deleteMSong(body);
		return SuccessResponse.response(SuccessCode.deleteRelationship());
	}

	@Delete("a-to-s")
	async deleteASong(@Body() body: AlbumSongDto) {
		await this.relationService.deleteASong(body);
		return SuccessResponse.response(SuccessCode.deleteRelationship());
	}
}
