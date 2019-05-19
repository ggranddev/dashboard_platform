import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})

export class ItemDetailComponent implements OnInit {

  @Input() item: Item;
  
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    console.log("item fetching with id", id);
    this.itemService.getItem(id)
      .subscribe(item => {
        this.item = item;
      });
  }
}
