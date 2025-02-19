import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { QueryParams, DataResponse, SingleDataResponse } from '@core/models';
import { BaseService } from '@core/services';
import { CreateVerseModel, UpdateVerseModel } from '@models/api/bible';
import { VerseViewModel } from '@models/view/bible';

@Injectable({
  providedIn: 'root',
})
export class VerseService extends BaseService<VerseViewModel> {
  private _baseUrl = '';

  constructor() {
    super();
  }

  public getVerses(
    params: QueryParams
  ): Observable<DataResponse<VerseViewModel>> {
    return this.get(this._baseUrl, params);
  }

  public getVerseById(
    id: number,
    params: QueryParams
  ): Observable<SingleDataResponse<VerseViewModel>> {
    return this.getById(`${this._baseUrl}/${id}`, params);
  }

  public createVerse(params: CreateVerseModel): Observable<number> {
    return this.create(this._baseUrl, params);
  }

  public updateVerse(id: number, params: UpdateVerseModel): Observable<void> {
    return this.update(`${this._baseUrl}/${id}`, params);
  }
}
