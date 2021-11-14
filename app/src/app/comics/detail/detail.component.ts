import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  comic: any = {};

  constructor() { }

  ngOnInit(): void {
    this.comic = history.state.data;
  }

}
