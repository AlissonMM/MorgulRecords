import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {

  private endpointUrl = `https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/`;

  constructor(private http: HttpClient) {}

  sendData(name: string, email: string): Observable<FormResponse> {
    const payload = { name, email };
    return this.http.post<FormResponse>(this.endpointUrl, payload);
  }

}
