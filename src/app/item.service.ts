import { Injectable } from '@angular/core';
import { ITEMS } from "./mockup";
import { Item } from './item';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
    this.messageService.add(('Item Service is fetching Items'));
  	return of(ITEMS);
  }
}
