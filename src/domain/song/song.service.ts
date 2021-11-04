import { Injectable } from '@nestjs/common';
import { Neo4jService } from 'src/neo4j/neo4j.service';

@Injectable()
export class SongService {
    constructor(private neo4jService: Neo4jService) {}

    createOne(body) {
    }
}
