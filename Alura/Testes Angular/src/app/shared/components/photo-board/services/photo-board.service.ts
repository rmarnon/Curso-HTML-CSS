import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Photo } from '../interfaces/photo';

@Injectable()
export class PhotoBoardService {

  constructor(private readonly httpClient: HttpClient) {}

  public getPhotos(): Observable<Photo[]> {
    return this.httpClient
    .get<Photo[]>('http://localhost:3000/photos')
    .pipe(delay(1000));
  }

}
