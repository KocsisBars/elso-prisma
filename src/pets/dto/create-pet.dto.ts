import { IsDateString, IsNotEmpty, IsString } from "class-validator"

export class CreatePetDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  species: string

  @IsDateString()
  birth: string
}
