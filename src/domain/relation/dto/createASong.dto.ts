import { IsString } from "class-validator";

export class CreateASongDto {
	@IsString()
	readonly albumId: string;

	@IsString()
	readonly songId: string;
}
