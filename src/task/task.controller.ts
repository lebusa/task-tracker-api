import { Controller, Get, Post, Put, Delete, Body, Param, Ip } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { TaskService } from './task.service';
import { Task } from './interfaces/task.interface';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Post()
        async create(@Body() taskDto: TaskDto, @Ip() ipAddress) {
            console.log(`got something from ${ipAddress}`, taskDto);
        return this.taskService.create(taskDto);
    }

    @Get()
        async findAll(): Promise<Task[]> {
        return this.taskService.findAll();
    }

    @Get(':id')
        async find(@Param('id') id: string) {
        return this.taskService.find(id);
    }

    @Put(':id')
        async update(@Param('id') id: string, @Body() taskDto: TaskDto) {
        return this.taskService.update(id, taskDto);
    }

    @Delete(':id')
        async delete(@Param('id') id: string, @Body() taskDto: TaskDto) {
        return this.taskService.delete(id, taskDto);
    }
}