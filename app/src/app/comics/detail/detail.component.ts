import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  comic: any = {};

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.comic = history.state.data;
  }

  public routeBack(): void {
    this.location.back()
  }
}
