import { Component, OnInit } from '@angular/core';
import { ComicDataService } from '../comic-data.service';
import { ApiService } from './../../api.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list:any = [];
  loading:boolean = false;

  constructor(private apiService: ApiService, private stateService: ComicDataService) { }

  ngOnInit(): void {
    const params = {};

    this.fetchComics(params);
  }


  private fetchComics(params: {}) {
    this.loading = true;

    this.apiService
      .get('comics', params)
      .subscribe((comics: any) => {
        this.list = comics.data.results;

        this.list.forEach(item => {
          let key = Math.random();
          if (key <= 0.1) {
            item.isRare = true;
          }
        });

        this.loading = false;
      });
  }

  public setData(item: any) {
    this.stateService.setDetail(item);
  }
}
