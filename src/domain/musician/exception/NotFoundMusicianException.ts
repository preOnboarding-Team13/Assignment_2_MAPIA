import { HttpException, HttpStatus } from "@nestjs/common";

export class NotFoundMusicianException extends HttpException {
	constructor() {
		super("해당 뮤지션이 없습니다.", HttpStatus.NOT_FOUND);
	}
}
