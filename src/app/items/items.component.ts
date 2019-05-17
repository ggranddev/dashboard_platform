import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mockup';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
	items: Item[];
	selectedItem: Item;
  	constructor(private itemService: ItemService) { }

  	ngOnInit() {
      this.getItems();
  	}

  	onSelect(item: Item) {
  		this.selectedItem = item;
  	}

  	getItems() {
      this.itemService.getItems().subscribe(items => this.items = items);
    }
}
