import { Injectable } from '@angular/core';
import { ITEMS } from "./mockup";
import { Item } from './item';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  midItem: Item;
  constructor(private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
    this.messageService.add(('Item Service is fetching Items'));
  	return of(ITEMS);
  }

  getItem(id: number): Observable<Item> {
    this.messageService.add(`ItemService: fetched item with id=${id}`);
    
    this.midItem = ITEMS.find(selectitem => selectitem.id == id);
    console.log("mid item", this.midItem);
    return of(ITEMS.find(item => item.id == id));
  }
}
