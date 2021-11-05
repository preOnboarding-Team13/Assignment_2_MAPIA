import { IsString } from "class-validator";

export class UpdateAlbum {
	@IsString()
	readonly name?: string;

	@IsString()
	readonly releaseDate?: string;
}
