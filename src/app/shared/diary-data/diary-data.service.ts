import { Injectable } from '@angular/core';
import { DiaryEntry } from '../types/models/diary-entry.model';
import { DiaryData } from '../types/interfaces/diary.type';

@Injectable({
  providedIn: 'root',
})
export class DiaryDataService {
  constructor() {}

  diaryData: DiaryData = {
    columns: ['date', 'message', 'action'],
    diaryEntries: [
      new DiaryEntry('Jan 1', 'Entry 1'),
      new DiaryEntry('Jan 1', 'Entry 1'),
    ],
  };
}
