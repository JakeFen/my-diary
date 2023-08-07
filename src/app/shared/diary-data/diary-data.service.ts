import { Injectable } from '@angular/core';
import { DiaryEntry } from '../types/models/diary-entry.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DiaryDataService {
  constructor(private router: Router) {}

  diarySubject = new Subject<DiaryEntry[]>();

  diaryCol: Array<string> = ['date', 'message', 'actions'];

  diaryEntries: DiaryEntry[] = [
    new DiaryEntry('Jan 1', 'Entry 1'),
    new DiaryEntry('Jan 1', 'Entry 1'),
  ];

  onEdit(index: number) {
    this.router.navigate(['edit', index]);
  }

  onDelete(index: number) {
    this.diaryEntries.splice(index, 1);
    this.diarySubject.next(this.diaryEntries);
  }

  onAddDiaryEntry(diaryEntry: DiaryEntry): void {
    this.diaryEntries.push(diaryEntry);
    this.diarySubject.next(this.diaryEntries);
  }

  onUpdateDiaryEntry(paramId: number, diaryEntry: DiaryEntry): void {
    this.diaryEntries[paramId] = diaryEntry;
    this.diarySubject.next(this.diaryEntries);
  }

  getDiaryEntry(index: number): DiaryEntry {
    return { ...this.diaryEntries[index] };
  }
}
