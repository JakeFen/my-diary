import { Injectable } from '@angular/core';
import { DiaryEntry } from '../types/models/diary-entry.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiaryDataService {
  constructor() {}

  diarySubject = new Subject<DiaryEntry[]>();

  diaryCol: Array<string> = ['date', 'message', 'actions'];

  diaryEntries: DiaryEntry[] = [
    new DiaryEntry('Jan 1', 'Entry 1'),
    new DiaryEntry('Jan 1', 'Entry 1'),
  ];

  onEdit(index: number) {}

  onDelete(index: number) {
    this.diaryEntries.splice(index, 1);
    this.diarySubject.next(this.diaryEntries);
  }

  onAddDiaryEntry(diaryEntry: DiaryEntry): void {
    this.diaryEntries.push(diaryEntry);
    this.diarySubject.next(this.diaryEntries);
  }
}
