import { IsInt, IsString } from "class-validator";

export class CreateDto {
	@IsString()
	readonly name: string;

	@IsString()
	readonly genre: string;

	@IsInt()
	readonly runningTime: number;
}
