export class ErrorCode {
	static readonly NotFoundMusician = new ErrorCode(
		404,
		"해당 뮤지션을 찾을 수 없습니다."
	);
	static readonly NotFoundAlbum = new ErrorCode(
		404,
		"해당 앨범을 찾을 수 없습니다."
	);
	static readonly NotFoundSong = new ErrorCode(
		404,
		"해당 노래를 찾을 수 없습니다."
	);
	static readonly NotFoundRelation = new ErrorCode(
		400,
		"연결 관계가 없습니다."
	);
	static readonly BadRequest = new ErrorCode(
		400,
		"요청 정보가 올바르지않습니다."
	);
	static readonly NotFound = new ErrorCode(404, "잘못된 API 경로입니다.");

	constructor(
		private readonly statusCode: number,
		public readonly message: string
	) {}

	get StatusCode(): number {
		return this.statusCode;
	}

	get Message(): string {
		return this.message;
	}
}
