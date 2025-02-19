import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { QueryParams, DataResponse, SingleDataResponse } from '@core/models';
import { BaseService } from '@core/services';
import { CreateChapterModel, UpdateChapterModel } from '@models/api/bible';
import { ChapterViewModel } from '@models/view/bible';

@Injectable({
  providedIn: 'root',
})
export class ChapterService extends BaseService<ChapterViewModel> {
  private _baseUrl = '';

  constructor() {
    super();
  }

  public getChapters(
    params: QueryParams
  ): Observable<DataResponse<ChapterViewModel>> {
    return this.get(this._baseUrl, params);
  }

  public getChapterById(
    id: number,
    params: QueryParams
  ): Observable<SingleDataResponse<ChapterViewModel>> {
    return this.getById(`${this._baseUrl}/${id}`, params);
  }

  public createChapter(params: CreateChapterModel): Observable<number> {
    return this.create(this._baseUrl, params);
  }

  public updateChapter(
    id: number,
    params: UpdateChapterModel
  ): Observable<void> {
    return this.update(`${this._baseUrl}/${id}`, params);
  }
}
