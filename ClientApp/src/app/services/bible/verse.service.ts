import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VerseViewModel } from '../../models/view-models/bible/verse.view-model'; // TODO: update path
import { DataResponse } from '../../core/models/data-response.model'; // TODO: update path
import { BaseService } from '../../core/services/base.service'; // TODO: update path
import { SingleDataResponse } from './../../core/models/data-response.model'; // TODO: update path
import {
  CreateVerseModel,
  UpdateVerseModel,
} from '../../models/api/bible/verse.model'; // TODO: update path
import { QueryParams } from '../../core/models/query-params'; // TODO: update path

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
