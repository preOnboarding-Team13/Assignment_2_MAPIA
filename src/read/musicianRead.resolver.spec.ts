import { Test, TestingModule } from "@nestjs/testing";
import { ReadService } from "./read.service";

const mockService = {
	readMusician: jest.fn(),
	readHaveSong: jest.fn(),
	readHaveContainAlbum: jest.fn()
};

describe("MusicianReadResolver", () => {
	let service: ReadService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				{
					provide: ReadService,
					useValue: mockService
				}
			]
		}).compile();
		service = module.get<ReadService>(ReadService);
	});

	describe("musician 가져오기 테스트", () => {
		const musician = {
			id: "uuid",
			name: "아이유",
			company: "SM"
		};

		it("musician 데이터 가져오기 성공", async () => {
			mockService.readMusician.mockResolvedValue(musician);
			const result = await service.readMusician();

			expect(service.readMusician()).toHaveBeenCalledTimes(0);
			// expect(service.readMusician()).toHaveBeenCalledWith();
			// expect(result).toEqual(musician);
		});
	});
});
