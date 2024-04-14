import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YourListBooksService } from '../../../services/your-list-books.service';

@Component({
  selector: 'app-your-book-info',
  templateUrl: './your-book-info.component.html',
  styleUrl: './your-book-info.component.scss'
})
export class YourBookInfoComponent {
  checkboxValue?: boolean;
  public book: any;
  page?: string;
  comment: string = '';
  spoilerToggle: boolean = false;
    constructor(private yourBooksService: YourListBooksService, private route: ActivatedRoute, private router: Router) {}
    ngOnInit(): void {
        let booksList = this.yourBooksService.cacheListBooks;
        this.route.params.subscribe((params) => {
          let page = ''
          if (params['page'] !== undefined) {
            page = params['page']
          }
          this.page = page
          let item: any = booksList.filter(
            (item: any) => item.id == params['id']
          )[0];
          this.book = item;
          this.checkboxValue = this.book.read;
        })
    }

    deleteComment(id: number, index: number) {
      this.yourBooksService.deleteComment(id, index)
    }
    addComment(comment: string) {
      if (comment === '') return
      this.yourBooksService.addComment(comment, this.book.id)
      this.comment = ''
    }
    readHandler(book:any) {
      this.yourBooksService.setRead(book.id, !this.checkboxValue)
    }
    deleteBook(book: any) {
      this.yourBooksService.deleteBook(book)
      let page = +this.page!
      if (page == 0) {
        page = 1
      }
      let maxPage = Math.ceil(this.yourBooksService.listBooks.length / 10);
      if (page > maxPage) {
        page = maxPage
      }
      if(page === 1)
      this.router.navigate([`your-books`])
      else
      this.router.navigate([`your-books/${page}`])
    }
}
