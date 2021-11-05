import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { NotFoundRelationException } from "src/domain/relation/exception/NotFoundRelationException";
import { ErrorCode } from "../common/ErrorCode";
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
				.json(ErrorResponse.response(ErrorCode.notFoundRelation()));
		}
	}
}