import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ListBooksCache } from '../../../../services/books-cache.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit{
    public book: any;
    constructor(private route: ActivatedRoute, private cacheService: ListBooksCache) {}
    ngOnInit(): void {
      let listBooks = this.cacheService.cache
      console.log(listBooks)
        this.route.params.subscribe((params: Params)=>{  
            let item: any = listBooks.filter((item: any) => item.id == params['id'])[0]
            this.book = item
        })
    }
}
