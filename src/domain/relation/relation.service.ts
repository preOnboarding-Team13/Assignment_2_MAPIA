import { Injectable } from "@nestjs/common";
import { AlbumRepository } from "../album/album.repository";
import { NotFoundAlbumException } from "../album/exception/NotFoundAlbumException";
import { NotFoundMusicianException } from "../musician/exception/NotFoundMusicianException";
import { MusicianRepository } from "../musician/musician.repository";
import { NotFoundSongException } from "../song/exception/NotFoundSongException";
import { SongRepository } from "../song/song.repository";
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

	async createMSong(body) {
		// find musician
		const musician = await this.musicianRepository.findOne(body.musicianId);
		if (musician === undefined) throw new NotFoundMusicianException();
		// find song
		const song = await this.songRepository.findOne(body.songId);
		if (song === undefined) throw new NotFoundSongException();
		// create relation
		return this.relationRepository.createMSong(body);
	}

	async createASong(body) {
		// find album
		const album = await this.albumRepository.findOne(body.albumId);
		if (album === undefined) throw new NotFoundAlbumException();
		// find song
		const song = await this.songRepository.findOne(body.songId);
		if (song === undefined) throw new NotFoundSongException();
		// create relation
		return this.relationRepository.createASong(body);
	}

	async deleteMSong(musicianId, songId) {
		// find musician
		const musician = await this.musicianRepository.findOne(musicianId);
		if (musician === undefined) throw new NotFoundMusicianException();
		// find song
		const song = await this.songRepository.findOne(songId);
		if (song === undefined) throw new NotFoundSongException();
		// delete relation
		const result = await this.relationRepository.deleteMSong(
			musicianId,
			songId
		);
		if (result === undefined) throw new NotFoundRelationException();
		return result;
	}

	async deleteASong(albumId, songId) {
		// find album
		const album = await this.albumRepository.findOne(albumId);
		if (album === undefined) throw new NotFoundAlbumException();
		// find song
		const song = await this.songRepository.findOne(songId);
		if (song === undefined) throw new NotFoundSongException();
		// delete relation
		const result = this.relationRepository.deleteASong(albumId, songId);
		if (result === undefined) throw new NotFoundRelationException();
		return result;
	}
}
