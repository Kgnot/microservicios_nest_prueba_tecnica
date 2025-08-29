import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { HISTORY_TASK_MODEL } from '../config';
import { HistoryTask } from '../interface/history-task';
import { CreateHistoryTaskDto } from '../dto/history-task.dto';

@Injectable()
export class HistoryTaskService {
  constructor(
    @Inject(HISTORY_TASK_MODEL) private historyModel: Model<HistoryTask>,
  ) {}

  async createLog(
    createHistoryTaskDto: CreateHistoryTaskDto,
  ): Promise<HistoryTask> {
    const createdLog = new this.historyModel(createHistoryTaskDto);
    return createdLog.save();
  }

  async getHistoryByTask(taskId: number) {
    return this.historyModel.find({ taskId }).exec();
  }


  async getAllHistory(): Promise<HistoryTask[]> {
    return this.historyModel
      .find({})
      .exec();
  }

}
