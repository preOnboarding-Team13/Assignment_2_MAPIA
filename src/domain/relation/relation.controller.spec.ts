import { Test, TestingModule } from "@nestjs/testing";
import { RelationController } from "./relation.controller";

describe("RelationController", () => {
	let controller: RelationController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [RelationController]
		}).compile();

		controller = module.get<RelationController>(RelationController);
	});

	it("should be defined", () => {
		expect(controller).toBeDefined();
	});
});
