export class SuccessCode {
	static readonly CreateSong = new SuccessCode(201, "곡이 등록되었습니다.");
	static readonly CreateMusician = new SuccessCode(
		201,
		"뮤지션이 등록되었습니다."
	);
	static readonly CreateAlbum = new SuccessCode(
		201,
		"앨범이 등록되었습니다."
	);
	static readonly UpdateSong = new SuccessCode(201, "곡이 수정되었습니다.");
	static readonly UpdateMusician = new SuccessCode(
		201,
		"뮤지션이 수정되었습니다."
	);
	static readonly UpdateAlbum = new SuccessCode(
		201,
		"앨범이 수정되었습니다."
	);
	static readonly DeleteSong = new SuccessCode(200, "곡이 삭제되었습니다.");
	static readonly DeleteMusician = new SuccessCode(
		200,
		"뮤지션이 삭제되었습니다."
	);
	static readonly DeleteAlbum = new SuccessCode(
		200,
		"앨범이 삭제되었습니다."
	);
	static readonly CreateRelationship = new SuccessCode(
		200,
		"연결되었습니다."
	);
	static readonly DeleteRelationship = new SuccessCode(
		200,
		"연결이 해제되었습니다."
	);

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
