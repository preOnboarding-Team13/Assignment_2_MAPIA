import { IsNotEmpty, IsString } from "class-validator";

export class RequestMusician {
	@IsString()
	@IsNotEmpty()
	readonly name: string;

	@IsString()
	@IsNotEmpty()
	readonly company: string;
}
