import { Component, OnInit } from '@angular/core';
import { Item, ITEMS } from '../item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
	item: Item[] = ITEMS;
  	constructor() { }

  	ngOnInit() {
	
  	}

}
