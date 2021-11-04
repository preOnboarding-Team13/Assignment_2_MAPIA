import { Injectable } from "@nestjs/common";
import { Neo4jService } from "src/neo4j/neo4j.service";
import { Album } from "./entity/album.entity";
import { Musician } from "./entity/musician.entity";
import { Song } from "./entity/song.entity";

@Injectable()
export class ReadService {
	constructor(private readonly neo4jService: Neo4jService) {}
	async readSong() {
		const readSong = await this.neo4jService
			.read(`MATCH (s:SONG) RETURN s`)
			.then((res) =>
				res.records.map((row) => new Song(row.get("s")).toJson())
			);

		return readSong;
	}

	async readMusician() {
		const readMusician = await this.neo4jService
			.read(`MATCH (m:MUSICIAN) RETURN m`)
			.then((res) =>
				res.records.map((row) => new Musician(row.get("m")).toJson())
			);

		return readMusician;
	}

	async readAlbum() {
		const readAlbum = await this.neo4jService
			.read(`MATCH (a:ALBUM) RETURN a`)
			.then((res) =>
				res.records.map((row) => new Album(row.get("a")).toJson())
			);
		return readAlbum;
	}
}
