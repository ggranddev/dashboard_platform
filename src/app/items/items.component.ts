import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mockup';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
	items: Item[] = ITEMS;
	selectedItem: Item;
  	constructor() { }

  	ngOnInit() {
	
  	}

  	onSelect(item: Item) {
  		this.selectedItem = item;
  	}
}
