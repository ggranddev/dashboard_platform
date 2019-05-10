import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
	item: Item = {
		id: 123,
		title: 'Product 1',
		description: 'Product 1 is a Good product'
	};
  	constructor() { }

  	ngOnInit() {
	
  	}

}
