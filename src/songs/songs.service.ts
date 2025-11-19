import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    // Local: db
    private songs:string[]=[];
    create(song: string){
        this.songs.push(song);
        return this.songs
    }

    findAll(){
        return this.songs   
    }
}
