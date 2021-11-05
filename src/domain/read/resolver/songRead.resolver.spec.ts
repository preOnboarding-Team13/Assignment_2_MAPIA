import { Test, TestingModule } from "@nestjs/testing";
import { Song } from "../graphql/graphql.schema";
import { ReadService } from "../read.service";
import { SongRead } from "./songRead.resolver";

const mockService = {
	readAllSong: jest.fn(),
	readSong: jest.fn(),
	readHaveMusician: jest.fn(),
	readContainAlbum: jest.fn()
};

describe("SongReadResolver", () => {
	let resolver: SongRead;
	let service: ReadService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				SongRead,
				{
					provide: ReadService,
					useValue: mockService
				}
			]
		}).compile();
		resolver = module.get<SongRead>(SongRead);
		service = module.get<ReadService>(ReadService);
	});

	describe("album 가져오기 테스트", () => {
		const musician = {
			id: "uuid1",
			name: "아이유",
			company: "SM"
		};

		const album = {
			id: "uuid2181",
			name: "무한도전가요제",
			releaseDate: "2011-11-01"
		};

		const song_1 = {
			id: "uuid3039",
			name: "말하는대로",
			genre: "팝",
			runningTime: 320
		};

		const song_2 = {
			id: "uuid3040",
			name: "좋은날",
			genre: "팝",
			runningTime: 290,
			musician: musician,
			album: album
		};

		const songAll = [song_1, song_2];

		it("resolver.readAllSong() 테스트 [성공]", async () => {
			// given
			mockService.readAllSong.mockResolvedValue(songAll);

			// when
			const result = await resolver.readAllSong();

			// then
			expect(mockService.readAllSong).toHaveBeenCalledTimes(1);
			expect(mockService.readAllSong).toHaveBeenCalledWith();
			expect(result).toEqual(songAll);
		});

		it("resolver.readSong() 테스트 [성공]", async () => {
			// given
			const id = "uuid3039";
			mockService.readSong.mockResolvedValue(song_1);

			// when
			const result = await resolver.readSong(id);

			// then
			expect(mockService.readSong).toHaveBeenCalledTimes(1);
			expect(mockService.readSong).toHaveBeenCalledWith(id);
			expect(result).toEqual(song_1);
		});

		it("resolver.musician() 테스트 [성공]", async () => {
			// given
			const songTest = new Song();
			songTest.id = "uuid3040";
			mockService.readHaveMusician.mockResolvedValue(musician);

			// when
			const result = await resolver.musician(songTest);

			// then
			expect(mockService.readHaveMusician).toHaveBeenCalledTimes(1);
			expect(mockService.readHaveMusician).toHaveBeenCalledWith(songTest);
			expect(result).toEqual(musician);
		});

		it("resolver.album() 테스트 [성공]", async () => {
			// given
			const songTest = new Song();
			songTest.id = "uuid3040";
			mockService.readContainAlbum.mockResolvedValue(album);

			// when
			const result = await resolver.album(songTest);

			// then
			expect(mockService.readContainAlbum).toHaveBeenCalledTimes(1);
			expect(mockService.readContainAlbum).toHaveBeenCalledWith(songTest);
			expect(result).toEqual(album);
		});
	});
});
