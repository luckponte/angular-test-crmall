import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list:any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const params = {};

    this.apiService
      .get('comics', params)
      .subscribe((comics: any) => {
        this.list = comics.data.results;
      });
  }

}
