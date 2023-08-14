import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { PromptService } from './prompt.service';

@Controller('prompt')
export class PromptController {
    constructor(private readonly promptService: PromptService) {}

    @Get()
    getAllPaths(@Query('idStart') idStart: number, @Query('idEnd') idEnd: number) : string[]{
        return this.promptService.getAllPrompts().slice(idStart, idEnd);
    }

    @Get(':id')
    getPathById(@Param('id', ParseIntPipe) id: number): string {
        return this.promptService.getPromptByIndex(id);
    }

    @Post(':id')
    completePrompt(@Param('id', ParseIntPipe) id: number, @Body() body) {
        const prompt = this.promptService.getPromptByIndex(id);
        
        return this.promptService.completeThePrompt(prompt, body);
    }

}
