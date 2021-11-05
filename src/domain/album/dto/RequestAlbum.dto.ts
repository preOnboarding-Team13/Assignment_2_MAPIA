import { IsNotEmpty, IsString } from "class-validator";

export class RequestAlbum {
	@IsString()
	@IsNotEmpty()
	readonly name: string;

	@IsString()
	@IsNotEmpty()
	readonly releaseDate: string;
}
