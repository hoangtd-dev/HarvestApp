import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '@env/environment';

import { QueryParams, DataResponse, SingleDataResponse } from '@core/models';

@Injectable()
export class BaseService<T = any> {
  protected readonly apiUrl = environment.apiUrl;
  protected http = inject(HttpClient);

  protected get(url: string, params?: QueryParams): Observable<DataResponse<T>> {
    const httpParams = params ? this.buildHttpParams(params) : undefined;
    return this.http
      .get<T[]>(`${this.apiUrl}${url}`, { params: httpParams })
      .pipe(map((data) => new DataResponse<T>(data)));
  }

  protected getById(url: string, params?: QueryParams): Observable<SingleDataResponse<T>> {
    const httpParams = params ? this.buildHttpParams(params) : undefined;
    return this.http
      .get<T>(`${this.apiUrl}${url}`, { params: httpParams })
      .pipe(map((data) => new SingleDataResponse<T>(data)));
  }

  protected create(url: string, body: unknown): Observable<number> {
    return this.http
      .post<{ id: number }>(`${this.apiUrl}${url}`, body)
      .pipe(map((response) => response.id));
  }

  protected update(url: string, body: unknown): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}${url}`, body);
  }

  protected delete(url: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${url}`);
  }

  private buildHttpParams(params: QueryParams): HttpParams {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined && params[key] !== null) {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return httpParams;
  }
}
