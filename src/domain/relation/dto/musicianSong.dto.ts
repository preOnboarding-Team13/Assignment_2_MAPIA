import { IsString } from "class-validator";

export class MusicianSongDto {
	@IsString()
	readonly musicianId: string;

	@IsString()
	readonly songId: string;
}
