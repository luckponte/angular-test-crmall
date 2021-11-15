import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  comic: any = {};
  item:any = {};

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.comic = history.state.data;
    this.item = {
      id: this.comic.id,
      price: this.comic.prices[0].price,
      title: this.comic.title,
      thumbnail: `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}`,
    }
  }

  public routeBack(): void {
    this.location.back()
  }
}
