import { Injectable } from "@nestjs/common";
import { Neo4jService } from "src/neo4j/neo4j.service";
import { Album } from "./entity/album.entity";
import { Musician } from "./entity/musician.entity";
import { Song } from "./entity/song.entity";

@Injectable()
export class ReadService {
	constructor(private readonly neo4jService: Neo4jService) {}
	async readAllSong() {
		const readSong = await this.neo4jService
			.read(`MATCH (s:SONG) RETURN s`, {})
			.then((res) =>
				res.records.map((row) => new Song(row.get("s")).toJson())
			);

		return readSong;
	}

	async readSong(id: string) {
		const readSong = await this.neo4jService
			.read(`MATCH (s:SONG) WHERE s.id='${id}' RETURN s`)
			.then((res) =>
				res.records.map((row) => new Song(row.get("s")).toJson())
			);

		return readSong;
	}
	async readAllMusician() {
		const readAllMusician = await this.neo4jService
			.read(`MATCH (m:MUSICIAN) RETURN m`)
			.then((res) =>
				res.records.map((row) => new Musician(row.get("m")).toJson())
			);

		return readAllMusician;
	}

	async readMusician(id: string) {
		const readMusician = await this.neo4jService
			.read(`MATCH (m:MUSICIAN) WHERE m.id='${id}' RETURN m`)
			.then((res) =>
				res.records.map((row) => new Musician(row.get("m")).toJson())
			);

		return readMusician;
	}

	async readAllAlbum() {
		const readAllAlbum = await this.neo4jService
			.read(`MATCH (a:ALBUM) RETURN a`)
			.then((res) =>
				res.records.map((row) => new Album(row.get("a")).toJson())
			);
		return readAllAlbum;
	}

	async readAlbum(id: string) {
		const readAlbum = await this.neo4jService
			.read(`MATCH (a:ALBUM) WHERE a.id = '${id}' RETURN a`)
			.then((res) =>
				res.records.map((row) => new Album(row.get("a")).toJson())
			);
		return readAlbum;
	}

	// MUSICIAN -[HAVE]-> SONG
	async readHaveSong(musician) {
		const haveSong = await this.neo4jService
			.read(
				`MATCH (m:MUSICIAN)-[HAVE]->(s:SONG) WHERE m.id = '${musician["id"]}'  RETURN s`
			)
			.then((res) =>
				res.records.map((row) => new Song(row.get("s")).toJson())
			);

		return haveSong;
	}

	// MUSICIAN -[HAVE]-> SONG <-[CONTAIN]- ALBUM
	async readHaveContainAlbum(musician) {
		const haveContainAlbum = await this.neo4jService
			.read(
				`MATCH (m:MUSICIAN)-[HAVE]->(s:SONG)<-[CONTAIN]-(a:ALBUM) 
				WHERE m.id = '${musician["id"]}' RETURN a`
			)
			.then((res) =>
				res.records.map((row) => new Album(row.get("a")).toJson())
			);

		return haveContainAlbum;
	}

	// SONG <-[HAVE]- MUSICIAN
	async readHaveMusician(song) {
		const haveMusician = await this.neo4jService
			.read(
				`MATCH (s:SONG)<-[HAVE]-(m:MUSICIAN) WHERE s.id = '${song["id"]}' RETURN m`
			)
			.then((res) =>
				res.records.map((row) => new Musician(row.get("m")).toJson())
			);

		return haveMusician;
	}

	// SONG <-[CONTAIN]- ALBUM
	async readContainAlbum(song) {
		const containAlbum = await this.neo4jService
			.read(
				`MATCH (s:SONG)<-[CONTAIN]-(a:ALBUM) WHERE s.id = '${song["id"]}' RETURN a`
			)
			.then((res) =>
				res.records.map((row) => new Album(row.get("a")).toJson())
			);

		return containAlbum;
	}

	// ALBUM -[CONTAIN]-> SONG
	async readContainSong(album) {
		const ccontainSong = await this.neo4jService
			.read(
				`MATCH (a:ALBUM)-[CONTAIN]->(s:SONG) WHERE a.id = '${album["id"]}' RETURN s`
			)
			.then((res) =>
				res.records.map((row) => new Song(row.get("s")).toJson())
			);

		return ccontainSong;
	}

	// ALBUM -[CONTAIN]-> SONG <-[HAVE]- MUSICIAN
	async readContainHaveSong(album) {
		const containHaveSong = await this.neo4jService
			.read(
				`MATCH (a:ALBUM)-[CONTAIN]->(s:SONG)<-[NEED]-(m:MUSICIAN) WHERE a.id = '${album["id"]}' RETURN m`
			)
			.then((res) =>
				res.records.map((row) => new Musician(row.get("m")).toJson())
			);

		return containHaveSong;
	}
}
