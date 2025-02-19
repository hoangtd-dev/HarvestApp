import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { loadChapters } from '../../store/actions/bible/chapter.actions';
import { loadVerses } from '../../store/actions/bible/verse.actions';
import { ChapterViewModel } from '../../models/view-models/bible/chapter.view-model';
import { VerseViewModel } from '../../models/view-models/bible/verse.view-model';
import { selectAllChapters } from '../../store/selectors/bible/chapter.selectors';
import { selectAllVerses } from '../../store/selectors/bible/verse.selectors';

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
