import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Crib } from './../crib';
import { map } from 'rxjs/operators';

@Injectable()
export class CribsService {

  public newCribSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  getAllCribs(): Observable<Crib[]>{
    return this.http.get<Crib[]>('data/cribs.json');
  }

  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }

}
