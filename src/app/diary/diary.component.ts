import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DiaryDataService } from '../shared/diary-data/diary-data.service';
import { MatButtonModule } from '@angular/material/button';
import { DiaryEntry } from '../shared/types/models/diary-entry.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
})
export class DiaryComponent implements OnDestroy {
  diaryCol: Array<string>;
  diaryEntries = new MatTableDataSource<DiaryEntry>();
  diarySubscription = new Subscription();

  constructor(private diaryDataService: DiaryDataService) {
    this.diaryCol = this.diaryDataService.diaryCol;

    this.diaryEntries.data = this.diaryDataService.diaryEntries;
    this.diarySubscription = this.diaryDataService.diarySubject.subscribe(
      (diaryEntires) => {
        this.diaryEntries.data = diaryEntires;
      }
    );
  }

  ngOnDestroy(): void {
    this.diarySubscription.unsubscribe();
  }

  onEdit(index: number): void {
    console.log(index);
  }

  onDelete(index: number): void {
    this.diaryDataService.onDelete(index);
  }
}
