import { Input, Component, ElementRef, Renderer2} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { ListBooksCache } from "../../../services/books-cache.service";
import { YourListBooksService } from "../../../services/your-list-books.service";
import { GetBooksService, IdataTransferGetBooks } from "../../../services/get-books.service";

@Component({
  selector: 'app-items-section',
  templateUrl: './items-section.component.html',
  styleUrl: './items-section.component.scss'
})
export class ItemsSectionComponent {
  constructor(private dataService: GetBooksService, private router: Router, private route: ActivatedRoute, private yourBooksService: YourListBooksService, private renderer: Renderer2) {}
  booksList?: any[];


  public redirectTo(id: number): void {
    this.router.navigate([`book-info/${id}`], {
      relativeTo: this.route
    });
  }

  addBookYourself(book: any, event: MouseEvent) {
    // if (!event.currentTarget) return;
    let hintElem = (event.currentTarget as HTMLElement).parentElement?.nextElementSibling;
    let bookId = book.id
    let findBook = this.yourBooksService.getData().find((book) => book.id === bookId)
    if(findBook == undefined) {
      this.yourBooksService.addBook(book)
    } else {
    this.renderer.setProperty(hintElem, 'textContent', 'Книга уже добавлена');
    setTimeout(()=>  this.renderer.setProperty(hintElem, 'textContent', ''), 1000)
    }
  }

  ngOnInit() {
    this.dataService.getDataObservable().subscribe((data: IdataTransferGetBooks) => {
      this.booksList = data.listBookPage;
    });
    this.booksList = this.dataService.listBookPage
  }
}
