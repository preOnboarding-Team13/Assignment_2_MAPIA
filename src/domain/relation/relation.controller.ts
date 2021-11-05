import { Controller, Post, Body, Delete, Param } from "@nestjs/common";
import { RelationService } from "./relation.service";
import { MusicianSongDto } from "./dto/musicianSong.dto";
import { SuccessResponse } from "src/global/common/successResponse";
import { SuccessCode } from "src/global/common/successCode";
import { AlbumSongDto } from "./dto/albumSong.dto";

@Controller("relations")
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

	@Delete("m-to-s/:musicianId/:songId")
	async deleteMSong(
		@Param("musicianId") musicianId: string,
		@Param("songId") songId: string
	) {
		await this.relationService.deleteMSong(musicianId, songId);
		return SuccessResponse.response(SuccessCode.deleteRelationship());
	}

	@Delete("a-to-s/:albumId/:songId")
	async deleteASong(
		@Param("albumId") albumId: string,
		@Param("songId") songId: string
	) {
		await this.relationService.deleteASong(albumId, songId);
		return SuccessResponse.response(SuccessCode.deleteRelationship());
	}
}
