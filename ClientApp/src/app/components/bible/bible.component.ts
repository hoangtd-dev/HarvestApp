import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ChapterViewModel, VerseViewModel } from '@models/view/bible';
import { loadChapters, loadVerses } from '@store/actions';
import { selectAllChapters, selectAllVerses } from '@store/selectors';

@Component({
  selector: 'app-bible',
  imports: [AsyncPipe],
  templateUrl: './bible.component.html',
  styleUrl: './bible.component.scss',
})
export class BibleComponent {
  private store = inject(Store);
  public chapters$: Observable<ChapterViewModel[]> =
    this.store.select(selectAllChapters);

  public verses$: Observable<VerseViewModel[]> =
    this.store.select(selectAllVerses);

  public loadChapters() {
    this.store.dispatch(loadChapters());
  }

  public loadVerses() {
    this.store.dispatch(loadVerses());
  }
}
