import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvironmentService } from 'app/services/environment.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

export interface HttpGatewayOptions {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    hasPreloader?: boolean;
}

@Injectable()
export class HttpGateway {

  private readonly BASE_URL: string;
  constructor(
    private environmentService: EnvironmentService,
    private http: HttpClient
  ) {
    this.BASE_URL = `${this.environmentService.baseUrl}`;
  }

  public get<T>(url: string, options?: HttpGatewayOptions): Observable<T> {
    const headers = new HttpHeaders({
      // tslint:disable-next-line: max-line-length
      Authorization: 'JWT token'
    });

    return this.makeRequest<T>(() => this.http.get<T>(`${url}`, { headers, responseType: 'json'}));
  }

  private makeRequest<T>(request: () => Observable<T>, options: HttpGatewayOptions = {} as HttpGatewayOptions) {
    if (options.hasPreloader) {
      // TODO: add possibility to show preloader while the content is being fetched from the backend
    }
    return request().pipe(finalize(() => {
      // TODO: add possibility to show preloader while the content is being fetched from the backend
    }));
  }
}
