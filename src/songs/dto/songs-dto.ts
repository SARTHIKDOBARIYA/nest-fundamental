import { IsArray, IsDate, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";

export class createSongDto{

    @IsString()
    @IsNotEmpty()
    readonly title:string;

    @IsArray()
    @IsString({each:true})
    @IsNotEmpty()
    readonly artist:string[];

    @IsDateString()
    @IsNotEmpty()
    readonly releaseDate:Date;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly Duration:Date; 
}