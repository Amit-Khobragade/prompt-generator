import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
    generateResponse(prompt: string ): string {
        return 'response ' + prompt;
    }
}
