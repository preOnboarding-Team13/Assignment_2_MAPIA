import { HttpException, HttpStatus } from "@nestjs/common";

export class NotFoundAlbumException extends HttpException {
	constructor() {
		super("해당 앨범이 없습니다.", HttpStatus.NOT_FOUND);
	}
}
