import {
	ArgumentsHost,
	BadRequestException,
	Catch,
	ExceptionFilter
} from "@nestjs/common";
import { NotFoundAlbumException } from "src/domain/album/exception/NotFoundAlbumException";
import { NotFoundMusicianException } from "src/domain/musician/exception/NotFoundMusicianException";
import { NotFoundRelationException } from "src/domain/relation/exception/NotFoundRelationException";
import { NotFoundSongException } from "src/domain/song/exception/NotFoundSongException";
import { ErrorCode } from "../common/errorCode";
import { ErrorResponse } from "../common/ErrorResponse";

@Catch()
export class ExceptionHandler implements ExceptionFilter {
	catch(exception: unknown, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse();
		if (exception instanceof NotFoundRelationException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.NotFoundRelation));
		} else if (exception instanceof NotFoundAlbumException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.NotFoundAlbum));
		} else if (exception instanceof NotFoundMusicianException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.NotFoundMusician));
		} else if (exception instanceof NotFoundSongException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.NotFoundSong));
		} else if (exception instanceof BadRequestException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.BadRequest));
		}
	}
}
