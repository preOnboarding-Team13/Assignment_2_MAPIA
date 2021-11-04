import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Neo4jModule } from "./neo4j/neo4j.module";
import { ConfigModule } from "@nestjs/config";
import { SongModule } from "./domain/song/song.module";

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: [".env"], isGlobal: true }),
		Neo4jModule.forRoot({
			scheme: "neo4j+s",
			host: process.env.NEO4J_HOST,
			username: process.env.NEO4J_USERNAME,
			password: process.env.NEO4J_PASSWORD
		}),
		SongModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
