import { ConfigModule } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { Neo4jModule } from "src/neo4j/neo4j.module";
import { Neo4jService } from "src/neo4j/neo4j.service";
import { Album, Musician, Song } from "./graphql/graphql.schema";
import { ReadService } from "./read.service";

describe("ReadService", () => {
	let service: ReadService;
	let neo4jService: Neo4jService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				ConfigModule.forRoot({ envFilePath: [".env"], isGlobal: true }),
				Neo4jModule.forRoot({
					scheme: "neo4j+s",
					host: process.env.NEO4J_HOST,
					username: process.env.NEO4J_USERNAME,
					password: process.env.NEO4J_PASSWORD
				})
			],
			providers: [ReadService]
		}).compile();

		service = module.get<ReadService>(ReadService);
		neo4jService = module.get<Neo4jService>(Neo4jService);
	});

	afterAll(async () => {
		await neo4jService.onApplicationShutdown();
	});

	describe("ReadService 테스트", () => {
		// given

		const musician = new Musician();
		musician.id = "96c35011-44ab-48cc-9db1-835d7c164b03";
		musician.name = "EXO";
		musician.company = "SM";

		const song = new Song();
		song.id = "efab1c9f-613a-47ff-b77e-0190cf00e1cd";
		song.name = "춤";
		song.genre = "POP";
		song.runningTime = 211;

		const album = new Album();
		album.id = "442de880-58fb-4ca4-97ae-809f2c3cc886";
		album.name = "OBSESSION";
		album.releaseDate = "2019-11-27";

		const songId = song.id;
		const musicianId = musician.id;
		const albumId = album.id;

		it("readAllSong() 테스트", async () => {
			// when
			const result = await service.readAllSong();

			// then
			if (result.length > 0) {
				expect(result[0]).toBeInstanceOf(Object);
				expect(typeof result[0].id).toBe("string");
				expect(typeof result[0].name).toBe("string");
				expect(typeof result[0].genre).toBe("string");
				expect(typeof result[0].runningTime).toBe("number");
			} else {
				expect(result[0]).toBeUndefined();
			}
		});

		it("readSong() 테스트", async () => {
			// when
			const result = await service.readSong(songId);

			if (result.length > 0) {
				expect(result[0]).toBeInstanceOf(Object);
				expect(typeof result[0].id).toBe("string");
				expect(typeof result[0].name).toBe("string");
				expect(typeof result[0].genre).toBe("string");
				expect(typeof result[0].runningTime).toBe("number");
				expect(result[0].id).toBe(song.id);
				expect(result[0].name).toBe(song.name);
				expect(result[0].genre).toBe(song.genre);
				expect(result[0].runningTime).toBe(song.runningTime);
			} else {
				expect(result[0]).toBeUndefined();
			}
		});

		it("readAllMusician() 테스트", async () => {
			// when
			const result = await service.readAllMusician();

			// then
			if (result.length > 0) {
				expect(result[0]).toBeInstanceOf(Object);
				expect(typeof result[0].id).toBe("string");
				expect(typeof result[0].name).toBe("string");
				expect(typeof result[0].company).toBe("string");
			} else {
				expect(result[0]).toBeUndefined();
			}
		});

		it("readMusician() 테스트", async () => {
			// when
			const result = await service.readMusician(musicianId);

			if (result.length > 0) {
				expect(result[0]).toBeInstanceOf(Object);
				expect(typeof result[0].id).toBe("string");
				expect(typeof result[0].name).toBe("string");
				expect(typeof result[0].company).toBe("string");
				expect(result[0].id).toBe(musician.id);
				expect(result[0].name).toBe(musician.name);
				expect(result[0].company).toBe(musician.company);
			} else {
				expect(result[0]).toBeUndefined();
			}
		});

		it("readAllAlbum() 테스트", async () => {
			// when
			const result = await service.readAllAlbum();

			// then
			if (result.length > 0) {
				expect(result[0]).toBeInstanceOf(Object);
				expect(typeof result[0].id).toBe("string");
				expect(typeof result[0].name).toBe("string");
				expect(typeof result[0].releaseDate).toBe("string");
			} else {
				expect(result[0]).toBeUndefined();
			}
		});

		it("readAlbum() 테스트", async () => {
			// when
			const result = await service.readAlbum(albumId);

			// then
			if (result.length > 0) {
				expect(result[0]).toBeInstanceOf(Object);
				expect(typeof result[0].id).toBe("string");
				expect(typeof result[0].name).toBe("string");
				expect(typeof result[0].releaseDate).toBe("string");
				expect(result[0].id).toBe(album.id);
				expect(result[0].name).toBe(album.name);
				expect(result[0].releaseDate).toBe(album.releaseDate);
			} else {
				expect(result[0]).toBeUndefined();
			}
		});

		it("readHaveSong() 테스트", async () => {
			// when
			const result = await service.readHaveSong(musician);

			// then
			if (result.length > 0) {
				expect(result[0]).toBeInstanceOf(Object);
				expect(typeof result[0].id).toBe("string");
				expect(typeof result[0].name).toBe("string");
				expect(typeof result[0].genre).toBe("string");
				expect(typeof result[0].runningTime).toBe("number");
			} else {
				expect(result[0]).toBeUndefined();
			}
		});

		it("readHaveContainAlbum() 테스트", async () => {
			// when
			const result = await service.readHaveContainAlbum(musician);

			// then
			if (result.length > 0) {
				expect(result[0]).toBeInstanceOf(Object);
				expect(typeof result[0].id).toBe("string");
				expect(typeof result[0].name).toBe("string");
				expect(typeof result[0].releaseDate).toBe("string");
			} else {
				expect(result[0]).toBeUndefined();
			}
		});

		it("readHaveMusician() 테스트", async () => {
			// when
			const result = await service.readHaveMusician(song);

			// then
			if (result.length > 0) {
				expect(result[0]).toBeInstanceOf(Object);
				expect(typeof result[0].id).toBe("string");
				expect(typeof result[0].name).toBe("string");
				expect(typeof result[0].company).toBe("string");
			} else {
				expect(result[0]).toBeUndefined();
			}
		});

		it("readContainAlbum() 테스트", async () => {
			// when
			const result = await service.readContainAlbum(song);

			// then
			if (result.length > 0) {
				expect(result[0]).toBeInstanceOf(Object);
				expect(typeof result[0].id).toBe("string");
				expect(typeof result[0].name).toBe("string");
				expect(typeof result[0].releaseDate).toBe("string");
			} else {
				expect(result[0]).toBeUndefined();
			}
		});

		it("readContainSong() 테스트", async () => {
			// when
			const result = await service.readContainSong(album);

			// then
			if (result.length > 0) {
				expect(result[0]).toBeInstanceOf(Object);
				expect(typeof result[0].id).toBe("string");
				expect(typeof result[0].name).toBe("string");
				expect(typeof result[0].genre).toBe("string");
				expect(typeof result[0].runningTime).toBe("number");
			} else {
				expect(result[0]).toBeUndefined();
			}
		});

		it("readContainHaveSong() 테스트", async () => {
			// when
			const result = await service.readContainHaveSong(album);

			// then
			if (result.length > 0) {
				expect(result[0]).toBeInstanceOf(Object);
				expect(typeof result[0].id).toBe("string");
				expect(typeof result[0].name).toBe("string");
				expect(typeof result[0].company).toBe("string");
			} else {
				expect(result[0]).toBeUndefined();
			}
		});
	});
});
