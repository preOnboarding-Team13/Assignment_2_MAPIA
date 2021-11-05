import { IsNotEmpty, IsString } from "class-validator";

export class ConnectMusicianToSong {
	@IsString()
	@IsNotEmpty()
	readonly musicianId: string;

	@IsString()
	@IsNotEmpty()
	readonly songId: string;
}
