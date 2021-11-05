export class ErrorCode {
	private statusCode: number;
	private message: string;

	constructor(statusCode: number, message: string) {
		this.statusCode = statusCode;
		this.message = message;
	}
	getMessage(): string {
		return this.message;
	}
	getStatusCode(): number {
		return this.statusCode;
	}
	public static notFound() {
		return new ErrorCode(404, "해당 데이터를 찾을 수 없습니다.");
	}
	public static badRequest() {
		return new ErrorCode(404, "잘못된 API 경로입니다.");
	}
}
