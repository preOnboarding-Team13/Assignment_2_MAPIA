import { Injectable } from "@nestjs/common";
import { AlbumRepository } from "../album/album.repository";
import { NotFoundAlbumException } from "../album/exception/NotFoundAlbumException";
import { NotFoundMusicianException } from "../musician/exception/NotFoundMusicianException";
import { MusicianRepository } from "../musician/musician.repository";
import { NotFoundSongException } from "../song/exception/NotFoundSongException";
import { SongRepository } from "../song/song.repository";
import { ConnectAlbumToSong } from "./dto/ConnectAlbumToSong.dto";
import { ConnectMusicianToSong } from "./dto/ConnectMusicianToSong.dto";
import { NotFoundRelationException } from "./exception/NotFoundRelationException";
import { RelationRepository } from "./relation.repository";

@Injectable()
export class RelationService {
	constructor(
		private relationRepository: RelationRepository,
		private musicianRepository: MusicianRepository,
		private songRepository: SongRepository,
		private albumRepository: AlbumRepository
	) {}

	async connectMusicianToSong(data: ConnectMusicianToSong) {
		// find musician
		const musician = await this.musicianRepository.findOne(data.musicianId);
		if (musician === undefined) throw new NotFoundMusicianException();
		// find song
		const song = await this.songRepository.findOne(data.songId);
		if (song === undefined) throw new NotFoundSongException();
		// create relation
		return this.relationRepository.connectMusicianToSong(data);
	}

	async connectAlbumToSong(data: ConnectAlbumToSong) {
		// find album
		const album = await this.albumRepository.findOne(data.albumId);
		if (album === undefined) throw new NotFoundAlbumException();
		// find song
		const song = await this.songRepository.findOne(data.songId);
		if (song === undefined) throw new NotFoundSongException();
		// create relation
		return this.relationRepository.connectAlbumToSong(data);
	}

	async unconnectMusicianToSong(musicianId, songId) {
		// find musician
		const musician = await this.musicianRepository.findOne(musicianId);
		if (musician === undefined) throw new NotFoundMusicianException();
		// find song
		const song = await this.songRepository.findOne(songId);
		if (song === undefined) throw new NotFoundSongException();
		// delete relation
		const result = await this.relationRepository.unconnectMusicianToSong(
			musicianId,
			songId
		);
		if (result === undefined) throw new NotFoundRelationException();
		return result;
	}

	async unconnectAlbumToSong(albumId, songId) {
		// find album
		const album = await this.albumRepository.findOne(albumId);
		if (album === undefined) throw new NotFoundAlbumException();
		// find song
		const song = await this.songRepository.findOne(songId);
		if (song === undefined) throw new NotFoundSongException();
		// delete relation
		const result = await this.relationRepository.unconnectAlbumToSong(
			albumId,
			songId
		);
		if (result === undefined) throw new NotFoundRelationException();
		return result;
	}
}
