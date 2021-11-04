import { Test, TestingModule } from "@nestjs/testing";
import { SongController } from "./song.controller";
import { SongService } from "./song.service";

const mockService = {
	createOne: jest.fn()
};

describe("SongController", () => {
	let controller: SongController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [SongController],
			providers: [
				{
					provide: SongService,
					useValue: mockService
				}
			]
		}).compile();
		controller = module.get<SongController>(SongController);
	});
	it("should be defined", () => {
		expect(controller).toBeDefined();
	});

	it("should.. ", async () => {
		const result = await controller.create({
			name: "123",
			genre: "asd",
			runningTime: 213
		});

		console.log(result, "테스트!");

		await controller
			.create({
				name: "123",
				genre: "asd",
				runningTime: 213
			})
			.catch((error) => {
				console.log(error, "에러");
				expect(error.message).toBe(
					"Cannot read property 'records' of undefined"
				);
			});
	});
});
