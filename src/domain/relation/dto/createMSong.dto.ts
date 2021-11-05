import { IsString } from "class-validator";

export class CreateMSongDto {
	@IsString()
	readonly musicianId: string;

	@IsString()
	readonly songId: string;
}
