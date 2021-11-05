export class SuccessCode {
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

	public static createSong() {
		return new SuccessCode(201, "곡이 등록되었습니다.");
	}

	public static createMusician() {
		return new SuccessCode(201, "뮤지션이 등록되었습니다.");
	}

	public static createAlbum() {
		return new SuccessCode(201, "앨범이 등록되었습니다.");
	}

	public static deleteSong() {
		return new SuccessCode(200, "곡이 삭제되었습니다.");
	}

	public static deleteMusician() {
		return new SuccessCode(200, "뮤지션이 삭제되었습니다.");
	}

	public static deleteAlbum() {
		return new SuccessCode(200, "앨범이 삭제되었습니다.");
	}

	public static createRelationship() {
		return new SuccessCode(200, "연결되었습니다.");
	}

	public static deleteRelationship() {
		return new SuccessCode(200, "연결이 해제되었습니다.");
	}
}
