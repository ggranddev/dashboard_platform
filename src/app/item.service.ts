import { Injectable } from '@angular/core';
import { ITEMS } from "./mockup";
import { Item } from './item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Observable<Item[]> {
  	return of(ITEMS);
  }
}
