import { IsNotEmpty, IsString } from 'class-validator';

export class ChatResponseDTO {
    @IsString()
    @IsNotEmpty()
    prompt: string
}