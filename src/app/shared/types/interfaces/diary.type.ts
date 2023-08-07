import { DiaryEntry } from '../models/diary-entry.model';

export interface DiaryData {
  columns: Array<any>;
  diaryEntries: DiaryEntry[];
}
