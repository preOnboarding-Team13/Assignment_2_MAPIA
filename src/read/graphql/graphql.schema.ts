export class Musician {
	name?: string;
	company?: string;
}

export class Song {
	name?: string;
	genre?: string;
	runningTime?: number;
	musician: Musician[];
	album: Album;
}

export class Album {
	name?: string;
	releaseDate?: string;
	musician: Musician[];
	song: Song[];
}
