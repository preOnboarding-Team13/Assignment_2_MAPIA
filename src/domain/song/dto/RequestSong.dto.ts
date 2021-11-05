import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class RequestSong {
	@IsString()
	@IsNotEmpty()
	readonly name: string;

	@IsString()
	@IsNotEmpty()
	readonly genre: string;

	@IsInt()
	@IsNotEmpty()
	readonly runningTime: number;
}
