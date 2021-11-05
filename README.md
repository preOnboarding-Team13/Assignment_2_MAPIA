# 🔥 Assignment_MAFIA(with NestJS)

🎼 wanted x wecode 프리온보딩 백엔드 코스 - [Assignment 2] 마피아컴퍼니

[마피아컴퍼니 사이트](http://www.mapiacompany.com/)<br/>
[wanted 채용공고 사이트](https://www.wanted.co.kr/company/6137)

<br/>

## ☄️ 팀원 소개

| 이름                                     | 담당 기능                                 |
| ---------------------------------------- | ----------------------------------------- |
| [김바다](https://github.com/sally0226)   | REST API 구현, Graphql API 구현           |
| [김효민](https://github.com/luckyhyom)   | Neo4j 설정, REST API 구현, e2e 테스트구현 |
| [원동균](https://github.com/WonDongGyun) | Graphql 설정, Graphql API 구현            |
| [이나영](https://github.com/bokiri409)   | REST API 구현, Graphql API 구현           |
| [장희진](https://github.com/heejin99)    | REST API 구현, Graphql API 구현           |
| [조재복](https://github.com/ildang100)   | REST API 구현, e2e 테스트구현             |

<br/>

## 🌎 배포

주소 : http://52.14.26.207:3000

<br/>



## 🛠 프로젝트 빌드 및 서버 실행 방법

1. 상단의 Code 버튼을 눌러 경로를 복사한 후 클론 받습니다.

```
$ git clone https://github.com/preOnboarding-Team13/Assignment_1_AIMMO_nest.git
```

2. 패키지를 설치합니다.

```
$ npm install
```

3. 서버를 실행해 줍니다.

```
$ npm start
```

4. 정해진 API에 접근하여 서비스를 이용합니다.



## 📝 과제 요구사항

### [필수 포함 사항]

-   READ.ME 작성
    -   프로젝트 빌드, 자세한 실행 방법 명시
    -   구현 방법과 이유에 대한 간략한 설명
    -   완료된 시스템이 배포된 서버의 주소
    -   Swagger나 Postman을 통한 API 테스트할때 필요한 상세 방법
    -   해당 과제를 진행하면서 회고 내용 블로그 포스팅
-   Swagger나 Postman을 이용하여 API 테스트 가능하도록 구현

<br/>

### [과제 안내]

음악 스트리밍 서비스에는 3가지 요소 `뮤지션` `곡` `앨범` 이 존재합니다.

앨범 페이지, 뮤지션 페이지, 곡 페이지에 인접 정보들 (ex, 곡의 뮤지션, 곡의 앨범) 을 표현할 수 있도록 **CRUD** API를 구성해주세요.

이 페이지들에 대한 DB를 구성할 때 `곡` - `뮤지션` 연결과 `곡` - `앨범` 연결은 내부 운영팀에서 직접 연결 가능하지만, `뮤지션` - `앨범` 정보까지 태깅하기엔 내부 운영 리소스가 부족한 상황으로 가정해보겠습니다.

이 때, `뮤지션` - `곡` 이 연결되어있고 `곡` - `앨범` 이 연결되어있다면 `뮤지션` - `[곡*]` - `앨범` 연결되어있다고 판단할 수 있는데요. 이 특성을 이용해서 `뮤지션` 의 `앨범` 을 보여주는 Read API, 특정 `앨범` 의 뮤지션 목록을 보여주는 Read API를 만들어주세요.

-   **Neo4j DB 테이블 요구사항**
    -   `뮤지션`, `곡`, `앨범`은 각각의 테이블 (musician, song, album)로 구성되어야합니다.
    -   `앨범` 안에는 여러 `곡`이 속해있을 수 있습니다.
    -   한 `곡`에는 여러 `뮤지션`이 참여할 수 있습니다.
    -   한 `곡`은 `앨범` 1개에만 들어가있습니다.
    -   `뮤지션`은 여러 앨범을 갖고 있을 수 있습니다.
    -   `뮤지션`, `앨범`, `곡` 데이터는 위 relation을 테스트할 수 있을만큼 임의로 생성해주시면 좋습니다.

<br/>

## 🏫 사용 기술

-   Backend : <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=NestJS&logoColor=white"/></a> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/></a> <img src="https://img.shields.io/badge/GraphQL-E10098?style=flat&logo=GraphQL&logoColor=white"/></a>
-   DataBase : <img src="https://img.shields.io/badge/Neo4j-008CC1?style=flat&logo=Neo4j&logoColor=white"/></a>
-   Collaboration : <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/></a> <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white"/></a>
-   Deploy: <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat&logo=Amazon AWS&logoColor=white"/>

<br/>

## 📂 폴더 구조

4개의 domain을 생성했습니다.

- album
- musician
- song
- relation 

각 domain은 아래와 같이 구성되어 있습니다.

- module
- controller
- service
- repository
- exception folder (for Custom Exception)

read 폴더: GraphQL 관련 폴더

neo4j 폴더: neo4j 설정 및 연결 관련 폴더

```
.
├── src
│  ├── domain
│  │  ├── album
│  │  │  ├── dto
│  │  │  │  └── create.dto.ts
│  │  │  ├── album.controller.spec.ts
│  │  │  ├── album.controller.ts
│  │  │  ├── album.module.ts
│  │  │  ├── album.repository.ts
│  │  │  ├── album.serivce.spec.ts
│  │  │  └── album.service.ts
│  │  ├── musician
│  │  │  └── ...
│  │  ├── relation
│  │  │  └── ...
│  │  ├── song
│  │  │  └── ...
│  ├── global
│  │  └── common
│  │  │  ├── commonResponse.ts
│  │  │  ├── errorCode.ts
│  │  │  ├── errorResponse.ts
│  │  │  ├── successCode.ts
│  │  │  └── successResponse.ts
│  ├── neo4j
│  │  ├── neo4j.constants.ts
│  │  ├── neo4j.module.ts
│  │  ├── neo4j.service.spec.ts
│  │  ├── neo4j.service.ts
│  │  └── neo4j.util.ts
│  ├── read
│  │  ├── entity
│  │  │  ├── album.entity.ts
│  │  │  ├── musician.entity.ts
│  │  │  └── song.entity.ts
│  │  ├── graphql
│  │  │  ├── album.graphql
│  │  │  ├── graphql.schema.ts
│  │  │  ├── musician.graphql
│  │  │  └── song.graphql
│  │  ├── albumRead.resolver.ts
│  │  ├── musicianRead.resolver.ts
│  │  ├── read.module.ts
│  │  ├── read.resolver.spec.ts
│  │  ├── read.service.spec.ts
│  │  ├── read.service.ts
│  │  └── songRead.resolver.ts
│  ├── app.controller.spec.ts
│  ├── app.controller.ts
│  ├── app.module.ts
│  ├── app.service.ts
│  ├── main.ts
│  └── neo4j-config.interface.ts
├── test
│  ├── app.e2e-spec.ts
│  └── jest-e2e.json
├── nest-cli.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.build.json
└── README.md
```



<br/>

## 🕸 DB 모델링

![GraphDB](https://user-images.githubusercontent.com/60311404/140509284-2a97df44-2504-4100-91ae-515df047e9b0.png)

<br/>

## 구현 기능

### 1) Check List

-   **화면별 Read API 요구사항 (GraphQL)**

    `곡` 페이지

     ✅ 해당 `곡`이 속한 `앨범`을 가져오는 API

     ✅ 해당 `곡`을 쓴 `뮤지션` 목록을 가져오는 API

    `앨범` 페이지

     ✅ 해당 `앨범`을 쓴 `뮤지션` 목록 가져오는 API

     ✅ 해당 `앨범`의 `곡` 목록을 가져오는 API

    `뮤지션` 페이지

     ✅ 해당 `뮤지션`의 모든 `앨범` API

     ✅ 해당 `뮤지션`의 `곡` 목록 가져오는 API

- **Create, Update, Delete API 요구사항 (RESTful API)**

  ✅ `곡` 생성 API

  ✅ `앨범` 생성 API

  ✅ `뮤지션` 생성 API

  ✅ `뮤지션` - `곡` 연결

  ✅ `뮤지션` - `곡` 연결해제 API

  ✅ `곡` - `앨범` 연결

  ✅ `곡` - `앨범`연결해제 API

  ✅ `뮤지션` - `앨범` 연결/연결해제 API 는 필요하지 않습니다. (구현 X)

  - `뮤지션` - `곡` 연결과 `곡` - `앨범` 연결이 되어있으면
    GraphDB (neo4j) 에서 `뮤지션` - [*] - `앨범` 연결 여부를 뽑을 수 있습니다. **이 특성을 Read API에서 활용**해주세요.

- **Test**

  [ ] Unit Test 

  [ ] API Test

### 2) 상세 내용

#### Neo4j aruaDB 이용

개발시에 팀원들이 모두 같은 DB를 이용하고, 배포시에도 편리하도록 local DBMS가 아닌 클라우드 형태의 Neo4j aruaDB 를 이용했습니다. 

![Neo4j_ARUA](https://user-images.githubusercontent.com/43634786/140530811-9877e852-771d-49e0-a672-1f69ec28ba4e.png)

#### GraphQL 관련 내용...



#### Test 관련 내용....




<br/>

## Postman 주소

[Postman](https://documenter.getpostman.com/view/15410333/UVC2G8wv)



## TIL 블로그 주소

