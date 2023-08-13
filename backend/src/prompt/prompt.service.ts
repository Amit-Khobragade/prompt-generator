import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PromptService {
    private readonly prompts: string[];
    constructor() {
        const file: string = fs.readFileSync(path.resolve( __dirname, "../assets",'prompts.txt')).toLocaleString();

        this.prompts = file.split(/\r?\n/);
    }

    getAllPrompts(): string[] { 
        return this.prompts;
    }

    getPromptByIndex(id: number): string {
        if(id >= this.prompts.length) {
            throw new NotFoundException('id not found')
        }
        return this.prompts[id];
    }

    completeThePrompt(prompt:string, properties) {
        for (const key in properties) {
            if(prompt.indexOf(`[${key}]`) >= 0 ){
                prompt = prompt.split(`[${key}]`).join(properties[key]);
            }
        }
        return prompt;
    }
}
