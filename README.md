# 🔥 Assignment_MAFIA(with NestJS)

🎼 wanted x wecode 프리온보딩 백엔드 코스 - [Assignment 2] 마피아컴퍼니

[마피아컴퍼니 사이트](http://www.mapiacompany.com/)<br/>
[wanted 채용공고 사이트](https://www.wanted.co.kr/company/6137)

<br/>

## ☄️ 팀원 소개
|이름|담당 기능|
|--|--|
|[김바다](https://github.com/sally0226)||
|[김효민](https://github.com/luckyhyom)||
|[원동균](https://github.com/WonDongGyun)||
|[이나영](https://github.com/bokiri409)||
|[장희진](https://github.com/heejin99)||
|[조재복](https://github.com/ildang100)||

<br/>

## 🌎 배포
주소 : 

<br/>

## 📝 과제 요구사항

### [필수 포함 사항]

- READ.ME 작성
    - 프로젝트 빌드, 자세한 실행 방법 명시
    - 구현 방법과 이유에 대한 간략한 설명
    - 완료된 시스템이 배포된 서버의 주소
    - Swagger나 Postman을 통한 API 테스트할때 필요한 상세 방법
    - 해당 과제를 진행하면서 회고 내용 블로그 포스팅
- Swagger나 Postman을 이용하여 API 테스트 가능하도록 구현

<br/>

### [과제 안내]
음악 스트리밍 서비스에는 3가지 요소 `뮤지션` `곡` `앨범` 이 존재합니다. 

앨범 페이지, 뮤지션 페이지, 곡 페이지에 인접 정보들 (ex, 곡의 뮤지션, 곡의 앨범) 을 표현할 수 있도록 **CRUD** API를 구성해주세요. 

이 페이지들에 대한 DB를 구성할 때 `곡` - `뮤지션` 연결과  `곡` - `앨범` 연결은 내부 운영팀에서 직접 연결 가능하지만, `뮤지션` - `앨범` 정보까지 태깅하기엔 내부 운영 리소스가 부족한 상황으로 가정해보겠습니다. 

이 때, `뮤지션` - `곡` 이 연결되어있고  `곡` - `앨범` 이 연결되어있다면  `뮤지션` - `[곡*]` - `앨범` 연결되어있다고 판단할 수 있는데요. 이 특성을 이용해서 `뮤지션` 의 `앨범` 을 보여주는 Read API, 특정 `앨범` 의 뮤지션 목록을 보여주는 Read API를 만들어주세요. 

- **Neo4j DB 테이블 요구사항**
    - `뮤지션`, `곡`, `앨범`은 각각의 테이블 (musician, song, album)로 구성되어야합니다.
    - `앨범` 안에는 여러 `곡`이 속해있을 수 있습니다.
    - 한 `곡`에는 여러 `뮤지션`이 참여할 수 있습니다.
    - 한 `곡`은 `앨범` 1개에만 들어가있습니다.
    - `뮤지션`은 여러 앨범을 갖고 있을 수 있습니다.
    - `뮤지션`, `앨범`, `곡` 데이터는 위 relation을 테스트할 수 있을만큼 임의로 생성해주시면 좋습니다.

<br/>

## ⚒ 사용 기술

-  Backend : <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=NestJS&logoColor=white"/></a> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/></a>
-  DataBase : <img src="https://img.shields.io/badge/Neo4j-008CC1?style=flat&logo=Neo4j&logoColor=white"/></a> <img src="https://img.shields.io/badge/GraphQL-E10098?style=flat&logo=GraphQL&logoColor=white"/></a>
-  Collaboration : <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/></a> <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white"/></a>


<br/>

## 📂 폴더 구조


<br/>

## 🕸 DB 모델링
![제목을 입력해주세요_-006 (1)](https://user-images.githubusercontent.com/41619081/140498881-78981863-b0d1-4b55-9cbb-85a24abdb617.png)


<br/>

## 구현 기능

- **화면별 Read API 요구사항 (GraphQL)**
    
    `곡` 페이지 
    
    - ✅  해당 `곡`이 속한 `앨범`을 가져오는 API
    - ✅  해당 `곡`을 쓴 `뮤지션` 목록을 가져오는 API
    
    `앨범` 페이지  
    
    - ✅  해당 `앨범`을 쓴 `뮤지션` 목록 가져오는 API
    - ✅  해당 `앨범`의 `곡` 목록을 가져오는 API
    
    `뮤지션` 페이지 
    
    - ✅  해당 `뮤지션`의 모든 `앨범` API
    - ✅  해당 `뮤지션`의 `곡` 목록 가져오는 API
    
- **Create, Update, Delete API 요구사항 (RESTful API)**
    - ✅  `곡` 생성 API
    - ✅  `앨범` 생성 API
    - ✅  `뮤지션` 생성 API
    - ✅  `뮤지션` - `곡` 연결
    - ✅  `뮤지션` - `곡` 연결해제 API
    - ✅  `곡` - `앨범` 연결
    - ✅  `곡` - `앨범`연결해제 API
    - `뮤지션` - `앨범` 연결/연결해제 API 는 필요하지 않습니다. (구현 X)
        - `뮤지션` - `곡` 연결과 `곡` - `앨범` 연결이 되어있으면
        GraphDB (neo4j) 에서 `뮤지션` - [*] - `앨범` 연결 여부를 뽑을 수 있습니다. **이 특성을 Read API에서 활용**해주세요.
- **TEST**
    - [ ]  Unit Test
    - [ ]  API Test
<br/>

## Unit Test

<br/>

## Postman 주소

