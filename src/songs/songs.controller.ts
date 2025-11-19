import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { createSongDto } from './dto/songs-dto';

@Controller('songs')
export class SongsController {

    constructor (private songService:SongsService){}
    @Post()
    create(@Body() createSongDto:createSongDto){
        return this.songService.create('Animal')
    }

    @Get()
    findAll(){
        return this.songService.findAll()
    }

    @Get(':id')
    findOne(){
        return 'find song Based on id';
    }
    
    @Put(':id')
    update(){
        return 'update song Based on id';
    }

    @Delete(':id')
    delete(){
        return 'delete Based on id';
    }

}
