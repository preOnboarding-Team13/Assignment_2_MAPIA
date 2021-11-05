import { IsNotEmpty, IsString } from "class-validator";

export class ConnectAlbumToSong {
	@IsString()
	@IsNotEmpty()
	readonly albumId: string;

	@IsString()
	@IsNotEmpty()
	readonly songId: string;
}
