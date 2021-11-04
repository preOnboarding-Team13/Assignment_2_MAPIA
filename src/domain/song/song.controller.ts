import { Body, Controller, Post } from '@nestjs/common';
import { SongService } from './song.service';

@Controller('song')
export class SongController {

    constructor(private songService: SongService) {}

    @Post()
    create(@Body() body) {
        this.songService.createOne(body)
    }

}
