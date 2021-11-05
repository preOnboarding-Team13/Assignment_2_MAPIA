import { IsString } from "class-validator";

export class UpdateMusician {
	@IsString()
	readonly name?: string;

	@IsString()
	readonly company?: string;
}
