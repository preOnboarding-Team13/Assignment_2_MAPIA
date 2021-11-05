export class Musician {
	id?: string;
	name?: string;
	company?: string;
	song: Song[];
	album: Album[];
}

export class Song {
	id?: string;
	name?: string;
	genre?: string;
	runningTime?: number;
	musician: Musician[];
	album: Album;
}

export class Album {
	id?: string;
	name?: string;
	releaseDate?: string;
	musician: Musician[];
	song: Song[];
}
