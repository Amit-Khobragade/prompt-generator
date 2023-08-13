import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PromptModule } from './prompt/prompt.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [PromptModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
