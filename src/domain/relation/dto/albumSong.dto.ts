import { IsString } from "class-validator";

export class AlbumSongDto {
	@IsString()
	readonly albumId: string;

	@IsString()
	readonly songId: string;
}
