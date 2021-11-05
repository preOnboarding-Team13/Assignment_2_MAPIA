import { IsString } from "class-validator";

export class CreateDto {
	@IsString()
	readonly name: string;

	@IsString()
	readonly releaseDate: string;
}
