import { Module } from "@nestjs/common";
import { ReadResolver } from "./read.resolver";
import { ReadService } from "./read.service";

@Module({
	providers: [ReadResolver, ReadService]
})
export class ReadModule {}
