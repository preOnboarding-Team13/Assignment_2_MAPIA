import { Test, TestingModule } from "@nestjs/testing";
import { AlbumRead } from "./albumRead.resolver";
import { Album } from "../graphql/graphql.schema";
import { ReadService } from "../read.service";

const mockService = {
	readAllAlbum: jest.fn(),
	readAlbum: jest.fn(),
	readContainSong: jest.fn(),
	readContainHaveSong: jest.fn()
};

describe("AlbumReadResolver", () => {
	let resolver: AlbumRead;
	let service: ReadService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				AlbumRead,
				{
					provide: ReadService,
					useValue: mockService
				}
			]
		}).compile();
		resolver = module.get<AlbumRead>(AlbumRead);
		service = module.get<ReadService>(ReadService);
	});

	describe("album 가져오기 테스트", () => {
		const song = {
			id: "uuid3039",
			name: "말하는대로",
			genre: "팝",
			runningTime: 320
		};

		const musician_1 = {
			id: "uuid1",
			name: "아이유",
			company: "SM"
		};

		const album_1 = {
			id: "uuid2181",
			name: "무한도전가요제",
			releaseDate: "2011-11-01"
		};

		const album_2 = {
			id: "uuid2182",
			name: "서해안가요제",
			releaseDate: "2014-05-21",
			song: song,
			musician: musician_1
		};

		const albumAll = {
			album_1,
			album_2
		};

		it("resolver.readAllAlbum() 테스트 [성공]", async () => {
			// given
			mockService.readAllAlbum.mockResolvedValue(albumAll);

			// when
			const result = await resolver.readAllAlbum();

			// then
			expect(mockService.readAllAlbum).toHaveBeenCalledTimes(1);
			expect(mockService.readAllAlbum).toHaveBeenCalledWith();
			expect(result).toEqual(albumAll);
		});

		it("resolver.readAlbum() 테스트 [성공]", async () => {
			// given
			const id = "uuid2181";
			mockService.readAlbum.mockResolvedValue(album_1);

			// when
			const result = await resolver.readAlbum(id);

			// then
			expect(mockService.readAlbum).toHaveBeenCalledTimes(1);
			expect(mockService.readAlbum).toHaveBeenCalledWith(id);
			expect(result).toEqual(album_1);
		});

		it("resolver.song() 테스트 [성공]", async () => {
			// given
			const albumTest = new Album();
			albumTest.id = "uuid2182";

			// when
			mockService.readContainSong.mockResolvedValue(song);
			const result = await resolver.song(albumTest);

			// then
			expect(mockService.readContainSong).toHaveBeenCalledTimes(1);
			expect(mockService.readContainSong).toHaveBeenCalledWith(albumTest);
			expect(result).toEqual(song);
		});

		it("resolver.Musician() 테스트 [성공]", async () => {
			// given
			const albumTest = new Album();
			albumTest.id = "uuid2182";

			// when
			mockService.readContainHaveSong.mockResolvedValue(musician_1);
			const result = await resolver.musician(albumTest);

			// then
			expect(mockService.readContainHaveSong).toHaveBeenCalledTimes(1);
			expect(mockService.readContainHaveSong).toHaveBeenCalledWith(
				albumTest
			);
			expect(result).toEqual(musician_1);
		});
	});
});
