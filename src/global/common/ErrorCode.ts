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
	public static notFoundMusician() {
		return new ErrorCode(404, "해당 뮤지션을 찾을 수 없습니다.");
	}
	public static notFoundAlbum() {
		return new ErrorCode(404, "해당 앨범을 찾을 수 없습니다.");
	}
	public static notFoundSong() {
		return new ErrorCode(404, "해당 노래를 찾을 수 없습니다.");
	}
	public static notFoundRelation() {
		return new ErrorCode(404, "연결 관계가 없습니다.");
	}
	public static badRequest() {
		return new ErrorCode(400, "요청 정보가 올바르지않습니다.");
	}
	public static notFound() {
		return new ErrorCode(404, "잘못된 API 경로입니다.");
	}
}
