import { Test, TestingModule } from "@nestjs/testing";
import { Musician } from "../graphql/graphql.schema";
import { ReadService } from "../read.service";
import { MusicianRead } from "./musicianRead.resolver";

const mockService = {
	readAllMusician: jest.fn(),
	readMusician: jest.fn(),
	readHaveSong: jest.fn(),
	readHaveContainAlbum: jest.fn()
};

describe("MusicianReadResolver", () => {
	let resolver: MusicianRead;
	let service: ReadService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				MusicianRead,
				{
					provide: ReadService,
					useValue: mockService
				}
			]
		}).compile();
		resolver = module.get<MusicianRead>(MusicianRead);
		service = module.get<ReadService>(ReadService);
	});

	describe("musician 가져오기 테스트", () => {
		const song = {
			id: "uuid3039",
			name: "말하는대로",
			genre: "팝",
			runningTime: 320
		};

		const album = {
			id: "uuid2181",
			name: "무한도전가요제",
			releaseDate: "2011-11-01"
		};

		const musician_1 = {
			id: "uuid1",
			name: "아이유",
			company: "SM"
		};

		const musician_2 = {
			id: "uuid2",
			name: "유재석",
			company: "KAKAO",
			song: song,
			album: album
		};

		const musicianAll = [musician_1, musician_2];

		it("resolver.readAllMusician() 테스트 [성공]", async () => {
			// given
			mockService.readAllMusician.mockResolvedValue(musicianAll);

			// when
			const result = await resolver.readAllMusician();

			// then
			expect(mockService.readAllMusician).toHaveBeenCalledTimes(1);
			expect(mockService.readAllMusician).toHaveBeenCalledWith();
			expect(result).toEqual(musicianAll);
		});

		it("resolver.readMusician() 테스트 [성공]", async () => {
			// given
			const id = "uuid1";
			mockService.readMusician.mockResolvedValue(musician_1);

			// when
			const result = await resolver.readMusician(id);

			// then
			expect(mockService.readMusician).toHaveBeenCalledTimes(1);
			expect(mockService.readMusician).toHaveBeenCalledWith(id);
			expect(result).toEqual(musician_1);
		});

		it("resolver.song() 테스트 [성공]", async () => {
			// given
			const musicianTest = new Musician();
			musicianTest.id = "uuid2";

			// when
			mockService.readHaveSong.mockResolvedValue(song);
			const result = await resolver.song(musicianTest);

			// then
			expect(mockService.readHaveSong).toHaveBeenCalledTimes(1);
			expect(mockService.readHaveSong).toHaveBeenCalledWith(musicianTest);
			expect(result).toEqual(song);
		});

		it("resolver.album() 테스트 [성공]", async () => {
			// given
			const musicianTest = new Musician();
			musicianTest.id = "uuid2";

			// when
			mockService.readHaveContainAlbum.mockResolvedValue(album);
			const result = await resolver.album(musicianTest);

			// then
			expect(mockService.readHaveContainAlbum).toHaveBeenCalledTimes(1);
			expect(mockService.readHaveContainAlbum).toHaveBeenCalledWith(
				musicianTest
			);
			expect(result).toEqual(album);
		});
	});
});
