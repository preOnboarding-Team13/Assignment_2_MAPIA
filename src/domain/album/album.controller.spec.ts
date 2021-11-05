import { Test, TestingModule } from "@nestjs/testing";
import { AlbumController } from "./album.controller";
import { AlbumService } from "./album.service";

describe("AlbumController", () => {
	let controller: AlbumController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [AlbumService],
			controllers: [AlbumController]
		}).compile();

		controller = module.get<AlbumController>(AlbumController);
	});

	it("should be defined", () => {
		expect(controller).toBeDefined();
	});
});
