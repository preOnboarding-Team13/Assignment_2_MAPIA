import { HttpException, HttpStatus } from "@nestjs/common";

export class NotFoundSongException extends HttpException {
	constructor() {
		super("해당 곡이 없습니다.", HttpStatus.NOT_FOUND);
	}
}
