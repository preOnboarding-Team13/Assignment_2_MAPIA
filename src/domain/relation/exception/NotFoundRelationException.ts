import { HttpException, HttpStatus } from "@nestjs/common";

export class NotFoundRelationException extends HttpException {
	constructor() {
		super("연결 관계가 없습니다.", HttpStatus.NOT_FOUND);
	}
}
