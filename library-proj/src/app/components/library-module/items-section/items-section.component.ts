import { Input, Component, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YourListBooksService } from '../../../services/your-list-books.service';
import {
  GetBooksService,
  IdataTransferGetBooks,
} from '../../../services/get-books.service';

@Component({
  selector: 'app-items-section',
  templateUrl: './items-section.component.html',
  styleUrl: './items-section.component.scss',
})
export class ItemsSectionComponent {
  constructor(
    private dataService: GetBooksService,
    private router: Router,
    private route: ActivatedRoute,
    private yourBooksService: YourListBooksService,
    private renderer: Renderer2
  ) {}
  booksList?: any[];
  timeoutId: NodeJS.Timeout | null = null;

  public redirectTo(id: number): void {
    this.router.navigate([`book-info/${id}`], {
      relativeTo: this.route,
    });
  }

  addBookYourself(book: any) {
    let bookId = book.id;
    let findBook = this.yourBooksService.listBooks.find(
      (book) => book.id === bookId
    );
    if (findBook == undefined) {
      this.yourBooksService.addBook(book);
    }
  }

  ngOnInit() {
    this.dataService
      .getDataObservable()
      .subscribe((data: IdataTransferGetBooks) => {
        this.booksList = data.listBookPage;
      });
    this.booksList = this.dataService.listBookPage;
  }
}
