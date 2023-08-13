import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PromptService } from './prompt.service';

@Controller('prompt')
export class PromptController {
    constructor(private readonly promptService: PromptService) {}

    @Get()
    getAllPaths() : string[]{
        return this.promptService.getAllPrompts();
    }

    @Get(':id')
    getPathById(@Param('id', ParseIntPipe) id: number): string {
        return this.promptService.getPromptByIndex(id);
    }

}
