# ๐ฅ Assignment_MAPIA(with NestJS)

๐ผ wanted x wecode ํ๋ฆฌ์จ๋ณด๋ฉ ๋ฐฑ์๋ ์ฝ์ค - [Assignment 2] ๋งํผ์์ปดํผ๋

[๋งํผ์์ปดํผ๋ ์ฌ์ดํธ](http://www.mapiacompany.com/)<br/>
[wanted ์ฑ์ฉ๊ณต๊ณ  ์ฌ์ดํธ](https://www.wanted.co.kr/company/6137)

<br/>

## โ๏ธ ํ์ ์๊ฐ

| ์ด๋ฆ                                     | ๋ด๋น ๊ธฐ๋ฅ                                 |
| ---------------------------------------- | ----------------------------------------- |
| [๊น๋ฐ๋ค](https://github.com/sally0226)   | REST API ๊ตฌํ, Graphql API ๊ตฌํ           |
| [๊นํจ๋ฏผ](https://github.com/luckyhyom)   | Neo4j ์ค์ , REST API ๊ตฌํ, e2e ํ์คํธ๊ตฌํ |
| [์๋๊ท ](https://github.com/WonDongGyun) | Graphql ์ค์ , Graphql API ๊ตฌํ, Graphql unit ํ์คํธ๊ตฌํ|
| [์ด๋์](https://github.com/bokiri409)   | REST API ๊ตฌํ, Graphql API ๊ตฌํ           |
| [์ฅํฌ์ง](https://github.com/heejin99)    | REST API ๊ตฌํ, Graphql API ๊ตฌํ           |
| [์กฐ์ฌ๋ณต](https://github.com/ildang100)   | REST API ๊ตฌํ, e2e ํ์คํธ๊ตฌํ             |

<br/>

## ๐ ๋ฐฐํฌ

์ฃผ์ : http://52.14.26.207:3000

<br/>



## ๐  ํ๋ก์ ํธ ๋น๋ ๋ฐ ์๋ฒ ์คํ ๋ฐฉ๋ฒ

1. ์๋จ์ Code ๋ฒํผ์ ๋๋ฌ ๊ฒฝ๋ก๋ฅผ ๋ณต์ฌํ ํ ํด๋ก  ๋ฐ์ต๋๋ค.

```
$ git clone https://github.com/preOnboarding-Team13/Assignment_1_MAPIA.git
```

2. ํจํค์ง๋ฅผ ์ค์นํฉ๋๋ค.

```
$ npm install
```

3. ์๋ฒ๋ฅผ ์คํํด ์ค๋๋ค.

```
$ npm start
```

4. ์ ํด์ง API์ ์ ๊ทผํ์ฌ ์๋น์ค๋ฅผ ์ด์ฉํฉ๋๋ค.

<br/>


## ๐ ๊ณผ์  ์๊ตฌ์ฌํญ

### [ํ์ ํฌํจ ์ฌํญ]

-   READ.ME ์์ฑ
    -   ํ๋ก์ ํธ ๋น๋, ์์ธํ ์คํ ๋ฐฉ๋ฒ ๋ช์
    -   ๊ตฌํ ๋ฐฉ๋ฒ๊ณผ ์ด์ ์ ๋ํ ๊ฐ๋ตํ ์ค๋ช
    -   ์๋ฃ๋ ์์คํ์ด ๋ฐฐํฌ๋ ์๋ฒ์ ์ฃผ์
    -   Swagger๋ Postman์ ํตํ API ํ์คํธํ ๋ ํ์ํ ์์ธ ๋ฐฉ๋ฒ
    -   ํด๋น ๊ณผ์ ๋ฅผ ์งํํ๋ฉด์ ํ๊ณ  ๋ด์ฉ ๋ธ๋ก๊ทธ ํฌ์คํ
-   Swagger๋ Postman์ ์ด์ฉํ์ฌ API ํ์คํธ ๊ฐ๋ฅํ๋๋ก ๊ตฌํ

<br/>

### [๊ณผ์  ์๋ด]

์์ ์คํธ๋ฆฌ๋ฐ ์๋น์ค์๋ 3๊ฐ์ง ์์ `๋ฎค์ง์` `๊ณก` `์จ๋ฒ` ์ด ์กด์ฌํฉ๋๋ค.

์จ๋ฒ ํ์ด์ง, ๋ฎค์ง์ ํ์ด์ง, ๊ณก ํ์ด์ง์ ์ธ์  ์ ๋ณด๋ค (ex, ๊ณก์ ๋ฎค์ง์, ๊ณก์ ์จ๋ฒ) ์ ํํํ  ์ ์๋๋ก **CRUD** API๋ฅผ ๊ตฌ์ฑํด์ฃผ์ธ์.

์ด ํ์ด์ง๋ค์ ๋ํ DB๋ฅผ ๊ตฌ์ฑํ  ๋ `๊ณก` - `๋ฎค์ง์` ์ฐ๊ฒฐ๊ณผ `๊ณก` - `์จ๋ฒ` ์ฐ๊ฒฐ์ ๋ด๋ถ ์ด์ํ์์ ์ง์  ์ฐ๊ฒฐ ๊ฐ๋ฅํ์ง๋ง, `๋ฎค์ง์` - `์จ๋ฒ` ์ ๋ณด๊น์ง ํ๊นํ๊ธฐ์ ๋ด๋ถ ์ด์ ๋ฆฌ์์ค๊ฐ ๋ถ์กฑํ ์ํฉ์ผ๋ก ๊ฐ์ ํด๋ณด๊ฒ ์ต๋๋ค.

์ด ๋, `๋ฎค์ง์` - `๊ณก` ์ด ์ฐ๊ฒฐ๋์ด์๊ณ  `๊ณก` - `์จ๋ฒ` ์ด ์ฐ๊ฒฐ๋์ด์๋ค๋ฉด `๋ฎค์ง์` - `[๊ณก*]` - `์จ๋ฒ` ์ฐ๊ฒฐ๋์ด์๋ค๊ณ  ํ๋จํ  ์ ์๋๋ฐ์. ์ด ํน์ฑ์ ์ด์ฉํด์ `๋ฎค์ง์` ์ `์จ๋ฒ` ์ ๋ณด์ฌ์ฃผ๋ Read API, ํน์  `์จ๋ฒ` ์ ๋ฎค์ง์ ๋ชฉ๋ก์ ๋ณด์ฌ์ฃผ๋ Read API๋ฅผ ๋ง๋ค์ด์ฃผ์ธ์.

-   **Neo4j DB ํ์ด๋ธ ์๊ตฌ์ฌํญ**
    -   `๋ฎค์ง์`, `๊ณก`, `์จ๋ฒ`์ ๊ฐ๊ฐ์ ํ์ด๋ธ (musician, song, album)๋ก ๊ตฌ์ฑ๋์ด์ผํฉ๋๋ค.
    -   `์จ๋ฒ` ์์๋ ์ฌ๋ฌ `๊ณก`์ด ์ํด์์ ์ ์์ต๋๋ค.
    -   ํ `๊ณก`์๋ ์ฌ๋ฌ `๋ฎค์ง์`์ด ์ฐธ์ฌํ  ์ ์์ต๋๋ค.
    -   ํ `๊ณก`์ `์จ๋ฒ` 1๊ฐ์๋ง ๋ค์ด๊ฐ์์ต๋๋ค.
    -   `๋ฎค์ง์`์ ์ฌ๋ฌ ์จ๋ฒ์ ๊ฐ๊ณ  ์์ ์ ์์ต๋๋ค.
    -   `๋ฎค์ง์`, `์จ๋ฒ`, `๊ณก` ๋ฐ์ดํฐ๋ ์ relation์ ํ์คํธํ  ์ ์์๋งํผ ์์๋ก ์์ฑํด์ฃผ์๋ฉด ์ข์ต๋๋ค.

<br/>

## ๐ซ ์ฌ์ฉ ๊ธฐ์ 

-   Backend : <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=NestJS&logoColor=white"/></a> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/></a> <img src="https://img.shields.io/badge/GraphQL-E10098?style=flat&logo=GraphQL&logoColor=white"/></a>
-   DataBase : <img src="https://img.shields.io/badge/Neo4j-008CC1?style=flat&logo=Neo4j&logoColor=white"/></a>
-   Collaboration : <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/></a> <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white"/></a>
-   Deploy: <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat&logo=Amazon AWS&logoColor=white"/>

<br/>

## ๐ ํด๋ ๊ตฌ์กฐ

5๊ฐ์ domain์ ์์ฑํ์ต๋๋ค.

- album
- musician
- song
- relation 
- read

๊ฐ domain์ ์๋์ ๊ฐ์ด ๊ตฌ์ฑ๋์ด ์์ต๋๋ค.

- module
- controller
- service
- repository
- exception folder (for Custom Exception)

read ํด๋: GraphQL ๊ด๋ จ ํด๋

neo4j ํด๋: neo4j ์ค์  ๋ฐ ์ฐ๊ฒฐ ๊ด๋ จ ํด๋

```
.
โโโ src
โ  โโโ domain
โ  โ  โโโ album
โ  โ  โ  โโโ dto
โ  โ  โ  โ  โโโ create.dto.ts
โ  โ  โ  โโโ album.controller.spec.ts
โ  โ  โ  โโโ album.controller.ts
โ  โ  โ  โโโ album.module.ts
โ  โ  โ  โโโ album.repository.ts
โ  โ  โ  โโโ album.serivce.spec.ts
โ  โ  โ  โโโ album.service.ts
โ  โ  โโโ musician
โ  โ  โ  โโโ ...
โ  โ  โโโ relation
โ  โ  โ  โโโ ...
โ  โ  โโโ song
โ  โ  โ  โโโ ...

โ  โ  โโโ read
โ  โ  โ  โโโ entity
โ  โ  โ  โ  โโโ album.entity.ts
โ  โ  โ  โ  โโโ musician.entity.ts
โ  โ  โ  โ  โโโ song.entity.ts
โ  โ  โ  โโโ graphql
โ  โ  โ  โ  โโโ album.graphql
โ  โ  โ  โ  โโโ graphql.schema.ts
โ  โ  โ  โ  โโโ musician.graphql
โ  โ  โ  โ  โโโ song.graphql
โ  โ  โ  โโโ loader
โ  โ  โ  โ  โโโ haveSongDataLoader.loader.ts
โ  โ  โ  โโโ resolver
โ  โ  โ  โ  โโโ albumRead.resolver.ts
โ  โ  โ  โ  โโโ albumRead.resolver.spec.ts
โ  โ  โ  โ  โโโ musicianRead.resolver.ts
โ  โ  โ  โ  โโโ musicianRead.resolver.spec.ts
โ  โ  โ  โ  โโโ songRead.resolver.ts
โ  โ  โ  โ  โโโ songRead.resolver.spec.ts
โ  โ  โ  โโโ read.module.ts
โ  โ  โ  โโโ read.service.spec.ts
โ  โ  โ  โโโ read.service.ts
โ  โโโ global
โ  โ  โโโ common
โ  โ  โ  โโโ commonResponse.ts
โ  โ  โ  โโโ errorCode.ts
โ  โ  โ  โโโ errorResponse.ts
โ  โ  โ  โโโ successCode.ts
โ  โ  โ  โโโ successResponse.ts
โ  โ  โโโ exception
โ  โ  โ  โโโ errorHandler.ts
โ  โโโ neo4j
โ  โ  โโโ neo4j.constants.ts
โ  โ  โโโ neo4j.module.ts
โ  โ  โโโ neo4j.service.spec.ts
โ  โ  โโโ neo4j.service.ts
โ  โ  โโโ neo4j.util.ts
โ  โโโ app.module.ts
โ  โโโ main.ts
โ  โโโ neo4j-config.interface.ts
โโโ test
โ  โโโ app.e2e-spec.ts
โ  โโโ jest-e2e.json
โโโ nest-cli.json
โโโ package.json
โโโ package-lock.json
โโโ tsconfig.json
โโโ tsconfig.build.json
โโโ README.md
```



<br/>

## ๐งฌ DB ๋ชจ๋ธ๋ง

![GraphDB](https://user-images.githubusercontent.com/60311404/140509284-2a97df44-2504-4100-91ae-515df047e9b0.png)

![image](https://user-images.githubusercontent.com/41619081/140576824-c7c5edce-ccb5-41fa-bb53-50bf1caa9657.png)


<br/>

## ๐ ๊ตฌํ ๊ธฐ๋ฅ

### 1) Check List


- **ํ๋ฉด๋ณ Read API ์๊ตฌ์ฌํญ (GraphQL)**
  

 `๊ณก` ํ์ด์ง

  โ ํด๋น `๊ณก`์ด ์ํ `์จ๋ฒ`์ ๊ฐ์ ธ์ค๋ API
    
  โ ํด๋น `๊ณก`์ ์ด `๋ฎค์ง์` ๋ชฉ๋ก์ ๊ฐ์ ธ์ค๋ API

 `์จ๋ฒ` ํ์ด์ง

  โ ํด๋น `์จ๋ฒ`์ ์ด `๋ฎค์ง์` ๋ชฉ๋ก ๊ฐ์ ธ์ค๋ API

  โ ํด๋น `์จ๋ฒ`์ `๊ณก` ๋ชฉ๋ก์ ๊ฐ์ ธ์ค๋ API

 `๋ฎค์ง์` ํ์ด์ง

  โ ํด๋น `๋ฎค์ง์`์ ๋ชจ๋  `์จ๋ฒ` API

  โ ํด๋น `๋ฎค์ง์`์ `๊ณก` ๋ชฉ๋ก ๊ฐ์ ธ์ค๋ API

- **Create, Update, Delete API ์๊ตฌ์ฌํญ (RESTful API)**

  โ `๊ณก` ์์ฑ API

  โ `์จ๋ฒ` ์์ฑ API

  โ `๋ฎค์ง์` ์์ฑ API

  โ `๋ฎค์ง์` - `๊ณก` ์ฐ๊ฒฐ

  โ `๋ฎค์ง์` - `๊ณก` ์ฐ๊ฒฐํด์  API

  โ `๊ณก` - `์จ๋ฒ` ์ฐ๊ฒฐ

  โ `๊ณก` - `์จ๋ฒ`์ฐ๊ฒฐํด์  API

  โ `๋ฎค์ง์` - `์จ๋ฒ` ์ฐ๊ฒฐ/์ฐ๊ฒฐํด์  API ๋ ํ์ํ์ง ์์ต๋๋ค. (๊ตฌํ X)

  - `๋ฎค์ง์` - `๊ณก` ์ฐ๊ฒฐ๊ณผ `๊ณก` - `์จ๋ฒ` ์ฐ๊ฒฐ์ด ๋์ด์์ผ๋ฉด
    GraphDB (neo4j) ์์ `๋ฎค์ง์` - [*] - `์จ๋ฒ` ์ฐ๊ฒฐ ์ฌ๋ถ๋ฅผ ๋ฝ์ ์ ์์ต๋๋ค. **์ด ํน์ฑ์ Read API์์ ํ์ฉ**ํด์ฃผ์ธ์.


- **Test**

  โ E2E Test
  
  โ Unit Test - GraphQL
  
  ๐บ Unit Test - Domain

### 2) ์์ธ ๋ด์ฉ

#### Neo4j aruaDB ์ด์ฉ

๊ฐ๋ฐ์์ ํ์๋ค์ด ๋ชจ๋ ๊ฐ์ DB๋ฅผ ์ด์ฉํ๊ณ , ๋ฐฐํฌ์์๋ ํธ๋ฆฌํ๋๋ก local DBMS๊ฐ ์๋ ํด๋ผ์ฐ๋ ํํ์ Neo4j aruaDB ๋ฅผ ์ด์ฉํ์ต๋๋ค. 

![Neo4j_ARUA](https://user-images.githubusercontent.com/43634786/140530811-9877e852-771d-49e0-a672-1f69ec28ba4e.png)

#### ๊ฐ Node์ Id ์์ฑ ์ถ๊ฐ

์ด๋ฆ์ด ๊ฐ์ ๋ฎค์ง์, ์ด๋ฆ์ด ๊ฐ์ ์จ๋ฒ ๋ฑ์ด ์กด์ฌํ  ๊ฒ ๊ฐ์ 

Node ์์ฑ์์ apoc.create.uuid() ๋ก id๊ฐ์ ์์ฑํด์ ๋ฃ์ด์ฃผ์์ต๋๋ค.

๊ทธ๋์ Node๋ฅผ id๋ก ์๋ณํ๋๋ก ํ์ต๋๋ค.

#### GraphQL ๊ด๋ จ 


***1. schema first ๋ฐฉ์ ์ฌ์ฉ***

graphql์ `autoSchemaFile: true` ์ต์์ ์ฌ์ฉํ์ฌ ์๋์ผ๋ก graphql schema file์ ๋ง๋๋ `code first ๋ฐฉ์`์ด ์๋, ์ฌ์ฉ์๊ฐ ์ง์  ์์ฑํ๋ `schema first ๋ฐฉ์`์ ์ฌ์ฉํ์์ต๋๋ค.
`schema first ๋ฐฉ์`์ ์ฌ์ฉ์๊ฐ ์ง์  graphql schema file์ ์์ฑํด์ผ ํด์ ๋ฐ๋์ SDL(Schema Definition Language)๊ณผ Resolver๊ฐ ์ ํํ ์ผ์นํด์ผ ํ๊ณ , ์ฝ๋๊ฐ ์คํ๋์ด์ผ ์ค๋ฅ๋ฅผ ์ ์ ์๋ค๋ ๋จ์ ์ด ์์ต๋๋ค.     

ํ์ง๋ง graphql schema๋ฅผ ๋จผ์  ์ ์ํ๊ณ  ํด๋น ์ ์์ ๋ง๊ฒ ์ฝ๋๋ฅผ ์์ฑํ๋ ๋ฐฉ์์ด๋ผ ์ฝ๋๊ฐ ์ ๋ถ ์์ฑ๋ ์ดํ graphql schema file์ด ์ ์๋๋ `code first ๋ฐฉ์`์ ๋นํด ๊ธฐ์ ์ ์ต์ํ์ง ์์ ์ฌ๋์ด ์ดํดํ๊ธฐ ์ฌ์ฐ๋ฉฐ schema model์ ๋ง๋ค๋ฉด์ ํ์๊ฐ ์์ฌ์ํต์ ์๋จ์ผ๋ก ์ผ์ ์ ์๋ค๋ ์ฅ์ ์ด ์์ต๋๋ค.      

graphql ๊ธฐ์ ์ ๋ค๋ค๋ณธ ์ฌ๋๊ณผ ๋ค๋ค๋ณด์ง ๋ชปํ ์ฌ๋์ด ์์ฌ์ ํ ํ์ ์ด๋ฃฌ ๊ฒฝ์ฐ ์ต๊ณ ์ ๋ฐฉ๋ฒ์ด๋ผ๊ณ  ์๊ฐํ์ฌ `schema firt ๋ฐฉ์`์ ์ฌ์ฉํ์์ต๋๋ค.    


<p align="center"><img src="https://user-images.githubusercontent.com/52685665/140557963-fa46aa62-b1b0-4739-bedd-ecd156e7aef1.png"></p>

<br/>
<br/>


***2. Data loader***

graphql๋ Rest API์ฒ๋ผ N + 1 ๋ฌธ์ ๋ฅผ ๊ฐ์ง๊ณ  ์์ต๋๋ค. Musician๊ณผ ์ฐ๊ด๋ Song์ ๊ฐ์ ธ์ค๊ธฐ ์ํด ๋ค์๊ณผ ๊ฐ์ ResolverField๋ฅผ ์ฌ์ฉํด๋ณด๊ฒ ์ต๋๋ค.  


``` javascript
@ResolveField(() => [Song])
song(@Parent() musician: Musician) {
    return this.readService.readHaveSong(musician);
}
```
<br/>
<br/>

ํด๋น ResolverField์์ ๋ค์๊ณผ ๊ฐ์ด readHaveSong()์ ์ฌ์ฉํ๊ณ  ์๋๋ฐ, ๋ง์ฝ 10๊ฐ์ musician๊ณผ ๊ด๋ จ๋ Song์ ์ฐพ๋๋ค๊ณ  ํ๋ฉด 11๋ฒ์ ์ฟผ๋ฆฌ๊ฐ ์ํ๋ฉ๋๋ค.  

<br/>

``` javascript
async readHaveSong(musician) {
    const haveSong = await this.neo4jService
        .read(
            `MATCH (m:MUSICIAN)-[HAVE]->(s:SONG) WHERE m.id = '${musician["id"]}'  RETURN s`
        )
        .then((res) =>
            res.records.map((row) => new Song(row.get("s")).toJson())
        );

    return haveSong;
}
```

<br/>

graphql ์์๋ ์ด๋ฌํ N + 1๋ฌธ์ ๋ฅผ ํด๊ฒฐํ๊ธฐ ์ํด data-loader๋ฅผ ์ง์ํฉ๋๋ค. ๋ค์๊ณผ ๊ฐ์ด ์ฌ๋ฌ๊ฐ์ musician id๊ฐ์ ๋ชจ์์ IN query๋ฅผ ๋ฐ์์ํด์ผ๋ก์ ๊ธฐ์กด์ 11๋ฒ ๋ฐ์ํ๋ ์ฟผ๋ฆฌ๋ฅผ 1๋ฒ์ ์ฟผ๋ฆฌ๋ง์ ์ฌ์ฉํด ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ  ์ ์์ต๋๋ค.   

<br/>

```javascript
@ResolveField(() => [Song])
song(
    @Parent() musician: Musician,
    @Loader(HaveSongDataLoader.name)
    locationGroupDataLoader: DataLoader<any, any>
) {
    console.log("hello");
    console.log(musician);
    return locationGroupDataLoader.load(musician);
}
```

```javascript
@Injectable()
export class HaveSongDataLoader {
	constructor(private readonly neo4jService: Neo4jService) {}
	generateDataLoader() {
		return new DataLoader<any, any>(async (musician_id) => {
			console.log(musician_id);
			const loader = await this.neo4jService
				.read(
					`MATCH (m:MUSICIAN)-[HAVE]->(s:SONG) WHERE m.id = [${musician_id}]  RETURN s`
				)
				.then((res) =>
					res.records.map((row) => new Song(row.get("s")).toJson())
				);
			loader.map((element) => console.log(element));
			return null;
		});
	}
}
```
<br/>
<br/>

๋ค๋ง ์์ฝ๊ฒ๋ ํ์ฌ `Nest Js v8`๊ณผ `nestjs-dataloader: 7.0.1` ๊ฐ ์ ๋๋ก ํธํ๋์ง ์์ Rxjs๊ฐ ์ถฉ๋ํ๋ฉฐ ๋ฐ์ํ๋ ๋ฒ๊ทธ๊ฐ ์์ต๋๋ค. ์ด๋ฌํ ๋ฒ๊ทธ๊ฐ ์์ด์ ๊ฒฐ๊ตญ์๋ data loader๋ฅผ ์ ์ฉ์ํค์ง ๋ชปํ์ต๋๋ค. ํด๋น ์ค๋ฅ๊ฐ ํด๊ฒฐ๋๋ฉด data loader๋ฅผ ์ ์ฉ์ํฌ ์ ์์ ๊ฒ ๊ฐ์ต๋๋ค.   


```
Property 'intercept' in type 'DataLoaderInterceptor' is not assignable to the same property in base type 'NestInterceptor<any, any>'.    
  Type '(context: ExecutionContext, next: CallHandler<any>) => Observable<any>' is not assignable to type '(context: ExecutionContext, next: CallHandler<any>) => Observable<any> | Promise<Observable<any>>'.
    Type 'Observable<any>' is not assignable to type 'Observable<any> | Promise<Observable<any>>'.
      Type 'import("C:/Users/mm/Desktop/Study/sparta/99/Assignment_2_MAPIA/node_modules/neo4j-driver/node_modules/rxjs/internal/Observable").Observable<any>' is not assignable to type 'import("C:/Users/mm/Desktop/Study/sparta/99/Assignment_2_MAPIA/node_modules/rxjs/dist/types/internal/Observable").Observable<any>'.
        The types of 'operator.call' are incompatible between these types.
```


#### End to end test

๊ฐ ๋๋ฉ์ธ์ ๋ค์ด์ค๋ Request์ ์ ํจ์ฑ ๊ฒ์ฌ๋ฅผ ์ํด ์ปจํธ๋กค๋ฌ ์ ๋ํ์คํธ๋ฅผ ํด์ผํ์ง๋ง
ํ์ฌ NestJS ํ๋ก์ ํธ์์๋ ์ปจํธ๋กค๋ฌ์ ๋ค์ด์ค๊ธฐ ์ ์ pipe๋ผ๋ ๋ฏธ๋ค์จ์ด๋ฅผ ํตํด ์ ํจ์ฑ ๊ฒ์ฌ๋ฅผ ํ๊ธฐ๋๋ฌธ์
e2e ํ์คํธ๋ก ๊ฐ ๋๋ฉ์ธ์ ๋ํ ์ ํจ์ฑ ๊ฒ์ฌ ํ์คํธ ์ฝ๋๋ฅผ ์์ฑํ์ต๋๋ค.

[์ ํจ์ฑ ๊ฒ์ฌ๋ e2e ํ์คํธ๋ฅผ ํตํด์..](https://stackoverflow.com/questions/58843038/how-to-manually-test-input-validation-with-nestjs-and-class-validator)


<br/>

## ๐พ API 

[Postman ์ฃผ์-๋งํฌ](https://documenter.getpostman.com/view/15410333/UVC2G8wv)

<br/>

## ๐พ API Test ๋ฐฉ๋ฒ

### 1. ์์ Postman ์ฃผ์ ๋งํฌ๋ฅผ ํด๋ฆญํ์ฌ Postman์ผ๋ก ๋ค์ด๊ฐ๋๋ค.
### 2. ์๋ฒ ์ฃผ์๊ฐ ์๋ง์์ง ํ์ธํฉ๋๋ค.

![image](https://user-images.githubusercontent.com/41619081/140549043-f899abb8-5521-4111-b56c-4ecffc7b8e76.png)

<br/>

### 3. Create API๋ฅผ ์ด์ฉํ์ฌ ๊ฐ๊ฐ์ ๊ณก, ์จ๋ฒ, ๋ฎค์ง์์ ์์ฑํ์ฌ id๊ฐ์ ์ป์ต๋๋ค.

![image](https://user-images.githubusercontent.com/41619081/140575288-06fbc578-3080-4d31-9d19-3e440ce314b9.png)

<br/>

### 4. ๊ฐ๊ฐ์ ์ป์ id๊ฐ์ ์ด์ฉํ์ฌ ์จ๋ฒ-๊ณก, ๋ฎค์ง์-๊ณก์ ์ฐ๊ฒฐ ๋๋ ์ฐ๊ฒฐํด์  ํฉ๋๋ค.

![image](https://user-images.githubusercontent.com/41619081/140575463-2129757e-8a2d-4718-ab91-60732f9a8934.png)

<br/>

### 5. ๊ฐ๊ฐ์ ์ป์ id๊ฐ์ ์ด์ฉํ์ฌ ๊ณก, ์จ๋ฒ, ๋ฎค์ง์์ ๋ํ ์ํ๋ ์ ๋ณด๋ฅผ ํ๋ ๋๋ ์ ๋ถ ๊ฐ์ ธ์ฌ ์ ์์ต๋๋ค. 

![image](https://user-images.githubusercontent.com/41619081/140576239-24d15fa3-22f1-4761-b220-433d39db6225.png)
![image](https://user-images.githubusercontent.com/41619081/140576097-95535ed8-d982-425d-8b53-5f5471d1d238.png)

<br/>

### 6. ๊ฐ๊ฐ์ ์ป์ id๊ฐ์ ์ด์ฉํ์ฌ ๊ณก, ์จ๋ฒ, ๋ฎค์ง์/ ์จ๋ฒ-๊ณก, ๋ฎค์ง์-๊ณก ์ฐ๊ฒฐ์ ์ญ์ ํ  ์ ์์ต๋๋ค.

![image](https://user-images.githubusercontent.com/41619081/140575725-c5692915-8047-4174-be6e-bb080970e0cd.png)

### 7. ๊ฐ๊ฐ์ ์ป์ id๊ฐ์ ์ด์ฉํ์ฌ ๊ณก, ์จ๋ฒ, ๋ฎค์ง์์ ์ ๋ณด๋ฅผ ์์ ํ  ์ ์์ต๋๋ค.

![image](https://user-images.githubusercontent.com/41619081/140576422-3db6d354-4b58-4c2c-8e34-7d7da28a08d6.png)



<br/>


## ๐ญ TIL ๋ธ๋ก๊ทธ ์ฃผ์

- ๊น๋ฐ๋ค : [ํฐ์คํ ๋ฆฌ ๋ธ๋ก๊ทธ](https://bba-dda.tistory.com/107)
- ๊นํจ๋ฏผ : [ํฐ์คํ ๋ฆฌ ๋ธ๋ก๊ทธ](https://baejjang.tistory.com/5)
- ์๋๊ท  : [ํฐ์คํ ๋ฆฌ ๋ธ๋ก๊ทธ](https://tristy.tistory.com/44)
- ์ด๋์ :
- ์ฅํฌ์ง :  [๊นํ๋ธ ๋ธ๋ก๊ทธ](https://heejin99.github.io/preonboarding/Pre-Onboarding-%EA%B8%B0%EC%97%85%EA%B3%BC%EC%A0%9C-%EB%A7%88%ED%94%BC%EC%95%84-%EC%BB%B4%ED%8D%BC%EB%8B%88/)
- ์กฐ์ฌ๋ณต : 

<br/>
