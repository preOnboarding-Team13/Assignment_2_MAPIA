import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "./../src/app.module";

const error = {
	IS_NOT_STRING: "must be a string",
	IS_NOT_NUMBER: "must be an integer number",
	IS_EMPTY: "should not be empty",
	NOT_FOUND_MUSICIAN: "해당 뮤지션이 없습니다.",
	NOT_FOUND_SONG: "해당 곡이 없습니다.",
	NOT_FOUND_ALBUM: "해당 앨범이 없습니다.",
	NOT_FOUND_RELATIONSHIP: "연결 관계가 없습니다."
};

const success = {
	CONNECTED: "연결되었습니다.",
	UNCONNECTED: "연결이 해제되었습니다."
};

const uuid = {
	MUSICIAN: "This is going to be filled",
	SONG: "",
	ALBUM: ""
};

describe("AppController (e2e)", () => {
	let app: INestApplication;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule]
		}).compile();
		app = moduleFixture.createNestApplication();
		app.useGlobalPipes(
			new ValidationPipe({
				whitelist: true,
				forbidNonWhitelisted: true,
				transform: true
			})
		);
		await app.init();
	});

	describe("Create Node API (POST)", () => {
		it("/musicians", () => {
			const musician = {
				name: "아이유",
				company: "KAKAO"
			};
			return request(app.getHttpServer())
				.post("/musicians")
				.send(musician)
				.expect(201)
				.expect((res) => {
					uuid.MUSICIAN = res.body.data.id;
				});
		});

		it("/musicians", () => {
			const musician = {
				name: 123
			};
			return request(app.getHttpServer())
				.post("/musicians")
				.send(musician)
				.expect(400)
				.expect((res) => {
					const messages = getErrorMessages(res);
					expect(messages[0]).toContain(error.IS_NOT_STRING);
					expect(messages[1]).toContain(error.IS_EMPTY);
				});
		});

		it("/songs", () => {
			const song = {
				name: "너랑 나",
				genre: "K-POP",
				runningTime: 243
			};
			return request(app.getHttpServer())
				.post("/songs")
				.send(song)
				.expect(201)
				.expect((res) => {
					uuid.SONG = res.body.data.id;
				});
		});

		it("/songs", () => {
			const song = {
				name: 123,
				genre: 123,
				runningTime: "String"
			};
			return request(app.getHttpServer())
				.post("/songs")
				.send(song)
				.expect(400)
				.expect((res) => {
					const message = getErrorMessages(res);
					expect(message[0]).toContain(error.IS_NOT_STRING);
					expect(message[1]).toContain(error.IS_NOT_STRING);
					expect(message[2]).toContain(error.IS_NOT_NUMBER);
				});
		});

		it("/albums", () => {
			const album = {
				name: "Last Fantasy",
				releaseDate: "2011-11-29"
			};
			return request(app.getHttpServer())
				.post("/albums")
				.send(album)
				.expect(201)
				.expect((res) => {
					uuid.ALBUM = res.body.data.id;
				});
		});

		it("/albums", () => {
			const album = {
				name: 123,
				releaseDate: 20111129
			};
			return request(app.getHttpServer())
				.post("/albums")
				.send(album)
				.expect(400)
				.expect((res) => {
					const message = getErrorMessages(res);
					expect(message[0]).toContain(error.IS_NOT_STRING);
					expect(message[1]).toContain(error.IS_NOT_STRING);
				});
		});
	});

	describe("Create Relationship API (POST)", () => {
		it("/relations/m-to-s", () => {
			const relationship = {
				musicianId: uuid.MUSICIAN,
				songId: uuid.SONG
			};
			return request(app.getHttpServer())
				.post("/relations/m-to-s")
				.send(relationship)
				.expect(201)
				.expect((res) => {
					const { message } = res.body;
					expect(message).toBe(success.CONNECTED);
				});
		});

		it("/relations/m-to-s", () => {
			const relationship = {
				musicianId: "  ",
				songId: "This is undefined"
			};
			return request(app.getHttpServer())
				.post("/relations/m-to-s")
				.send(relationship)
				.expect(404)
				.expect((res) => {
					const message = getErrorMessages(res);
					expect(message).toBe(error.NOT_FOUND_MUSICIAN);
				});
		});

		it("/relations/a-to-s", () => {
			const relationship = {
				albumId: uuid.ALBUM,
				songId: uuid.SONG
			};
			return request(app.getHttpServer())
				.post("/relations/a-to-s")
				.send(relationship)
				.expect(201)
				.expect((res) => {
					const { message } = res.body;
					expect(message).toBe(success.CONNECTED);
				});
		});

		it("/relations/a-to-s", () => {
			const relationship = {
				albumId: "  ",
				songId: "This is undefined"
			};
			return request(app.getHttpServer())
				.post("/relations/a-to-s")
				.send(relationship)
				.expect(404)
				.expect((res) => {
					const message = getErrorMessages(res);
					expect(message).toBe(error.NOT_FOUND_ALBUM);
				});
		});
	});

	describe("Delete Relationship API (POST)", () => {
		it("/relations/m-to-s/:musicianId/:songId", () => {
			return request(app.getHttpServer())
				.delete(`/relations/m-to-s/${uuid.MUSICIAN}/${uuid.SONG}`)
				.expect(200)
				.expect((res) => {
					const { message } = res.body;
					expect(message).toBe(success.UNCONNECTED);
				});
		});

		it("/relations/m-to-s/:musicianId/:songId", () => {
			return request(app.getHttpServer())
				.delete(`/relations/m-to-s/${uuid.MUSICIAN}/${uuid.SONG}`)
				.expect(404)
				.expect((res) => {
					const message = getErrorMessages(res);
					expect(message).toBe(error.NOT_FOUND_RELATIONSHIP);
				});
		});

		it("/relations/a-to-s/:albumId/:songId", () => {
			return request(app.getHttpServer())
				.delete(`/relations/a-to-s/${uuid.ALBUM}/${uuid.SONG}`)
				.expect(200)
				.expect((res) => {
					const { message } = res.body;
					expect(message).toBe(success.UNCONNECTED);
				});
		});

		it("/relations/a-to-s/:albumId/:songId", () => {
			return request(app.getHttpServer())
				.delete(`/relations/a-to-s/${uuid.ALBUM}/${uuid.SONG}`)
				.expect(404)
				.expect((res) => {
					const message = getErrorMessages(res);
					expect(message).toBe(error.NOT_FOUND_RELATIONSHIP);
				});
		});
	});

	describe("Delete Node API (DELETE)", () => {
		it("/songs/:songId", () => {
			return request(app.getHttpServer())
				.delete(`/songs/${uuid.SONG}`)
				.expect(200);
		});

		it("/songs/:songId", () => {
			return request(app.getHttpServer())
				.delete(`/songs/${uuid.SONG}`)
				.expect(404)
				.expect((res) => {
					const message = getErrorMessages(res);
					expect(message).toBe(error.NOT_FOUND_SONG);
				});
		});

		it("/albums/:albumId", () => {
			return request(app.getHttpServer())
				.delete(`/albums/${uuid.ALBUM}`)
				.expect(200);
		});

		it("/albums/:albumId", () => {
			return request(app.getHttpServer())
				.delete(`/albums/${uuid.ALBUM}`)
				.expect(404)
				.expect((res) => {
					const message = getErrorMessages(res);
					expect(message).toBe(error.NOT_FOUND_ALBUM);
				});
		});

		it("/musicians/:musicianId", () => {
			return request(app.getHttpServer())
				.delete(`/musicians/${uuid.MUSICIAN}`)
				.expect(200);
		});

		it("/musicians/:musicianId", () => {
			return request(app.getHttpServer())
				.delete(`/musicians/${uuid.MUSICIAN}`)
				.expect(404)
				.expect((res) => {
					const message = getErrorMessages(res);
					expect(message).toBe(error.NOT_FOUND_MUSICIAN);
				});
		});
	});
});

function getErrorMessages(res) {
	return res.body.message;
}
