import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TaskDto } from './task.dto';
import { Task } from './task.interface';

@Injectable()
export class TaskService {

  constructor(@Inject('TASK_MODEL') private readonly taskModel: Model<Task>) {}

  async create(taskDto: TaskDto): Promise<Task> {
    const createdTask = new this.taskModel(taskDto);
    return await createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }

  async find(id: string): Promise<Task> {
    return await this.taskModel.findById(id).exec();
  }

  async update(id: string, taskDto: TaskDto): Promise<Task> {
    return await this.taskModel.findByIdAndUpdate(id, taskDto);
  }

  async delete(id: string, taskDto: TaskDto): Promise<Task> {
    return await this.taskModel.findByIdAndRemove(id);
  }
}