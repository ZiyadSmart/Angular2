import { inject, Injectable } from '@angular/core';
import { Temperature } from '../../../../model/temperature/temperature.models';
import { HttpClient } from '@angular/common/http';
import { IDataTemperature } from '../../../../model/temperature/data-temperature';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  private apiUrl:string = 'http://localhost:3000/api/temperatures';
  private http = inject(HttpClient);


  getAll(): Observable<Temperature[]> {
  return this.http.get<any>(this.apiUrl).pipe(
    map(response => {
      const dataArray = response.data; // ← extraction
      if (!Array.isArray(dataArray)) {
        throw new Error('La réponse ne contient pas un tableau sous la clé "data"');
      }
      return dataArray.map((temperatureDict: any) =>
        Temperature.fromJson(temperatureDict)
      );
    })
  );
}


  get(id: number): Observable<Temperature>{
    return this.http.get<IDataTemperature>(this.apiUrl + '/' + id).pipe(
      map(temperatureDict => Temperature.fromJson(temperatureDict))
    )
  }

  add(temperature: Temperature): Observable<Temperature>{
    return this.http.post<IDataTemperature>(this.apiUrl, temperature.toJson()).pipe(
      map(temperatureDict => Temperature.fromJson(temperatureDict))
    )
  }

  update(temperature: Temperature): Observable<Temperature> {
  // On n'envoie que la valeur dans le corps de la requête PUT
  const payload = { value: temperature.value };
  
  return this.http.put<IDataTemperature>(this.apiUrl + '/' + temperature.id, payload).pipe(
    map(temperatureDict => Temperature.fromJson(temperatureDict))
  );
}

  delete(id: number): Observable<void>{
    return this.http.delete<void>(this.apiUrl + '/' + id)
  }
}
