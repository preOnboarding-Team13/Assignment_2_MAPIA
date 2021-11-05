import { IsInt, IsString } from "class-validator";

export class UpdateSong {
	@IsString()
	readonly name?: string;

	@IsString()
	readonly genre?: string;

	@IsInt()
	readonly runningTime?: number;
}
