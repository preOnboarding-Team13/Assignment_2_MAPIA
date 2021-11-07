import { HttpException, HttpStatus } from "@nestjs/common";
import { ErrorCode } from "src/global/common/errorCode";

export class NotFoundSongException extends HttpException {
	constructor() {
		super(ErrorCode.NotFoundSong, HttpStatus.NOT_FOUND);
	}
}
