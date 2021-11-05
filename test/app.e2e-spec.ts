import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "./../src/app.module";

const error = {
	IS_NOT_STRING: "must be a string",
	IS_NOT_NUMBER: "must be an integer number",
	IS_EMPTY: "should not be empty"
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
				.expect(201);
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
				.expect(201);
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
				.expect(201);
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
});

function getErrorMessages(res) {
	return res.body.message;
}
