import { HttpException, HttpStatus } from "@nestjs/common";
import { ErrorCode } from "src/global/common/errorCode";

export class NotFoundRelationException extends HttpException {
	constructor() {
		super(ErrorCode.NotFoundRelation, HttpStatus.NOT_FOUND);
	}
}
