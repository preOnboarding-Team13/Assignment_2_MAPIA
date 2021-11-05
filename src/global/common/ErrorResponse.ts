import { CommonResponse } from "./CommonResponse";
import { ErrorCode } from "./ErrorCode";

export class ErrorResponse extends CommonResponse {
	constructor(errorCode: ErrorCode) {
		super();
		this.statusCode = errorCode.getStatusCode();
		this.message = errorCode.getMessage();
	}

	public static response(errorCode: ErrorCode) {
		return new ErrorResponse(errorCode);
	}
}