import { inject, Injectable } from '@angular/core';
import { Humidite } from '../../../../model/humidite/humidite.models';
import { HttpClient } from '@angular/common/http';
import { IDataHumidite} from '../../../../model/humidite/data-humidite';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumiditeService {

  private apiUrl:string = 'http://localhost:3010/api/humidite';
    private http = inject(HttpClient);
  
  
  getAll(): Observable<Humidite[]> {
  return this.http.get<any>(this.apiUrl).pipe(
    map(response => {
      const dataArray = response.data; // ← extraction
      if (!Array.isArray(dataArray)) {
        throw new Error('La réponse ne contient pas un tableau sous la clé "data"');
      }
      return dataArray.map((humiditeDict: any) =>
        Humidite.fromJson(humiditeDict)
      );
    })
  );
}


  get(id: number): Observable<Humidite>{
    return this.http.get<IDataHumidite>(this.apiUrl + '/' + id).pipe(
      map(humiditeDict => Humidite.fromJson(humiditeDict))
    )
  }

  add(humidite: Humidite): Observable<Humidite>{
    return this.http.post<IDataHumidite>(this.apiUrl, humidite.toJson()).pipe(
      map(humiditeDict => Humidite.fromJson(humiditeDict))
    )
  }

  update(humidite: Humidite): Observable<Humidite> {
  // On n'envoie que la valeur dans le corps de la requête PUT
  const payload = { value: humidite.value };
  
  return this.http.put<IDataHumidite>(this.apiUrl + '/' + humidite.id, payload).pipe(
    map(humiditeDict => Humidite.fromJson(humiditeDict))
  );
}

  delete(id: number): Observable<void>{
    return this.http.delete<void>(this.apiUrl + '/' + id)
  }
}
