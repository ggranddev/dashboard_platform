import { Injectable } from '@angular/core';
import { ITEMS } from "./mockup";
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Item[] {
  	return ITEMS;
  }
}
