import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DiaryEntry } from '../shared/types/models/diary-entry.model';
import { DiaryDataService } from '../shared/diary-data/diary-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class DiaryFormComponent {
  diaryForm: FormGroup;
  editMode = false;
  diaryEntry: DiaryEntry;
  paramId: number;

  constructor(
    private diaryDataService: DiaryDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.has('id')) {
        this.editMode = true;
        this.paramId = +paramMap.get('id')!;
        this.diaryEntry = this.diaryDataService.getDiaryEntry(this.paramId);
      }
    });
    this.diaryForm = new FormGroup({
      date: new FormControl(this.diaryEntry?.date || null, Validators.required),
      message: new FormControl(
        this.diaryEntry?.message || null,
        Validators.required
      ),
    });
  }

  onSubmit(): void {
    const newEntry = new DiaryEntry(
      this.diaryForm.value.date,
      this.diaryForm.value.message
    );

    if (this.editMode) {
      this.diaryDataService.onUpdateDiaryEntry(this.paramId, newEntry);
    } else this.diaryDataService.onAddDiaryEntry(newEntry);
    this.router.navigateByUrl('');
  }
}
