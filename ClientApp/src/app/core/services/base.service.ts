import { map, Observable, of } from 'rxjs';

import { QueryParams, DataResponse, SingleDataResponse } from '@core/models';

export class BaseService<T> {
  constructor() {}

  protected get(
    url: string,
    params?: QueryParams
  ): Observable<DataResponse<T>> {
    // TODO: Implement http
    return of([]).pipe(map((data) => new DataResponse<T>(data)));
  }

  protected getById(
    url: string,
    params?: QueryParams
  ): Observable<SingleDataResponse<T>> {
    // TODO: Implement http
    return of().pipe(map((data) => new SingleDataResponse<T>(data)));
  }

  protected create(url: string, body: unknown): Observable<number> {
    // TODO: Implement http
    return of().pipe();
  }

  protected update(url: string, params: unknown): Observable<void> {
    // TODO: Implement http
    return of().pipe();
  }
}
