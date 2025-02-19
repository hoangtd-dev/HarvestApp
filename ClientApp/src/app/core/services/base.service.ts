import { map, Observable, of } from 'rxjs';
import {
  DataResponse,
  SingleDataResponse,
} from '../models/data-response.model'; // TODO: Update Path
import { QueryParams } from '../models/query-params'; // TODO: Update path

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
