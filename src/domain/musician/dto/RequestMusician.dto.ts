import { IsNotEmpty, IsString } from "class-validator";

export class RequestMusician {
	@IsString()
	@IsNotEmpty()
	name;

	@IsString()
	@IsNotEmpty()
	company;
}
