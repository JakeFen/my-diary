import { Injectable } from '@angular/core';
import { DiaryEntry } from '../types/models/diary-entry.model';

@Injectable({
  providedIn: 'root',
})
export class DiaryDataService {
  constructor() {}

  diaryCol: Array<string> = ['date', 'message', 'actions'];

  diaryEntries: DiaryEntry[] = [
    new DiaryEntry('Jan 1', 'Entry 1'),
    new DiaryEntry('Jan 1', 'Entry 1'),
  ];

  onEdit(index: number) {}

  onDelete(index: number) {
    this.diaryEntries.splice(index, 1);
  }
}
