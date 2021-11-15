import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicDataService {
  public comics: Array<any> = [];
  public detailComic: any = {};

  constructor() { }

  public setDetail(item: any) {
    this.detailComic = item;
  }

  public setList(collection: Array<any>) {
    this.comics = collection;
  }
}
