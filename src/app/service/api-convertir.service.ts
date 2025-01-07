import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiConvertirService {

  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  // Obtener lista de monedas
  getCurrencies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/currencies?api_key=${this.apiKey}`);
  }

  // Convertir de una moneda a otra
  convert(from: string, to: string, amount: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/convert?from=${from}&to=${to}&amount=${amount}&api_key=${this.apiKey}`
    );
  }
}
