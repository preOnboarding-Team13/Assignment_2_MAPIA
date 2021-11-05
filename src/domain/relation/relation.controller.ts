import { Controller, Post, Body, Delete, Param } from "@nestjs/common";
import { RelationService } from "./relation.service";
import { ConnectMusicianToSong } from "./dto/ConnectMusicianToSong.dto";
import { SuccessResponse } from "src/global/common/successResponse";
import { SuccessCode } from "src/global/common/successCode";
import { ConnectAlbumToSong } from "./dto/ConnectAlbumToSong.dto";

@Controller("relations")
export class RelationController {
	constructor(private relationService: RelationService) {}

	@Post("m-to-s")
	async connectMusicianToSong(@Body() body: ConnectMusicianToSong) {
		await this.relationService.connectMusicianToSong(body);
		return SuccessResponse.response(SuccessCode.createRelationship());
	}

	@Post("a-to-s")
	async connectAlbumToSong(@Body() body: ConnectAlbumToSong) {
		await this.relationService.connectAlbumToSong(body);
		return SuccessResponse.response(SuccessCode.createRelationship());
	}

	@Delete("m-to-s/:musicianId/:songId")
	async unconnectMusicianToSong(
		@Param("musicianId") musicianId: string,
		@Param("songId") songId: string
	) {
		await this.relationService.unconnectMusicianToSong(musicianId, songId);
		return SuccessResponse.response(SuccessCode.deleteRelationship());
	}

	@Delete("a-to-s/:albumId/:songId")
	async unconnectAlbumToSong(
		@Param("albumId") albumId: string,
		@Param("songId") songId: string
	) {
		await this.relationService.unconnectAlbumToSong(albumId, songId);
		return SuccessResponse.response(SuccessCode.deleteRelationship());
	}
}
