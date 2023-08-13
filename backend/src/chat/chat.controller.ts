import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatResponseDTO } from './ChatDTO/chat.dto';

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService){}

    @Post()
    generateResponse(@Body() {prompt}: ChatResponseDTO) {
        return this.chatService.generateResponse(prompt);
    }
}
