import { HttpException, HttpStatus } from "@nestjs/common";
import { ErrorCode } from "src/global/common/errorCode";

export class NotFoundAlbumException extends HttpException {
	constructor() {
		super(ErrorCode.NotFoundAlbum, HttpStatus.NOT_FOUND);
	}
}
