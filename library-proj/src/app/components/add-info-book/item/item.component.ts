import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  Renderer2,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  GetBooksService,
  IdataTransferGetBooks,
} from '../../../services/get-books.service';
import { YourListBooksService } from '../../../services/your-list-books.service';
import { IqueryListBooks } from '../../library-module/filter-section/filter-section.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent implements OnInit {
  public book: any;
  query: IqueryListBooks = {};
  timeoutId: NodeJS.Timeout | null = null;
  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private dataService: GetBooksService,
    private yourBooksService: YourListBooksService
  ) {}
  ngOnInit(): void {
    this.dataService
      .getDataObservable()
      .subscribe((data: IdataTransferGetBooks) => {
        this.query = data.query;
      });
    this.query = this.dataService.query;
    let booksList = this.dataService.listBookPage;
    this.route.params.subscribe((params: Params) => {
      let item: any = booksList!.filter(
        (item: any) => item.id == params['id']
      )[0];
      this.book = item;
    });
  }
  addBookYourself(book: any, event: MouseEvent) {
    let hintElem = (event.currentTarget as HTMLElement).parentElement?.nextElementSibling;
    let bookId = book.id;
    let findBook = this.yourBooksService.listBooks.find((book) => book.id === bookId);
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    if (findBook == undefined) {
      this.yourBooksService.addBook(book);
    } else {
      this.renderer.setProperty(hintElem, 'textContent', 'Книга уже добавлена');
      this.timeoutId = setTimeout(
        () => {
          this.renderer.setProperty(hintElem, 'textContent', '');
          this.timeoutId = null;
        },
        1000
      );
    }
  }
}
