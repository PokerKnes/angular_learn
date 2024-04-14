import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

export interface IdataTransferYourBooks {
  countPages?: number;
  currentPage?: number;
  listBooks?: any[];
}

@Injectable()
export class YourListBooksService {
  currentPage: number = 1;
  countPages: number = 1;
  listBooks: any[] = [];
  cacheListBooks: any[] = [];
  private dataSubject = new Subject<IdataTransferYourBooks>();
  private dataSubjectView = new Subject<IdataTransferYourBooks>();

  getDataObservable() {
    return this.dataSubject.asObservable();
  }

  updateData(countPages?: number, currentPage?: number) {
    this.countPages = countPages!;
    this.currentPage = currentPage!;
    let data: IdataTransferYourBooks = {
      countPages: this.countPages,
      currentPage: this.currentPage
    };
    this.dataSubject.next(data);
  }

  getDataObservableView() {
    return this.dataSubjectView.asObservable();
  }

  updateDataView() {
    let data: IdataTransferYourBooks = {
      listBooks: this.listBooks
    };
    this.dataSubjectView.next(data);
  }

  readFilter(action: string) {
    let cache = this.cacheListBooks.slice(0, this.cacheListBooks.length)
    if(action == 'all') {
      this.listBooks = cache
      this.updateDataView()
      return
    }   
    
    if (action == 'read') {
      this.listBooks = cache.filter((item) => item.read == true);
    } else {
      this.listBooks = cache.filter((item) => item.read != true);
    }
    this.updateDataView()
  }
  addBook(book: object) {
    this.listBooks.push(book);
    this.cacheListBooks.push(book);
  }
  deleteBook(book: any) {
    this.listBooks = this.listBooks.filter((item) => book.id != item.id);
    this.cacheListBooks = this.cacheListBooks.filter((item) => book.id != item.id);
  }
  addComment(comment: string, id: number) {
    let indexBook = this.listBooks.findIndex((item) => item.id == id);
    let date = new Date;
    let data = {
      comment: comment,
      date: date
    }
    if (indexBook !== -1) {
        this.listBooks[indexBook]['messages'].push(data);      
    } else {
        console.error('Книга с указанным id не найдена.');
    }
  }

  deleteComment(idBook: number, indexComment: number) {
    let indexBook = this.listBooks.findIndex((item) => item.id == idBook);
    if (indexBook !== -1) {
      this.listBooks[indexBook]['messages'].splice(indexComment, 1);
  } else {
      console.error('Книга с указанным id не найдена.');
  }
  }

  setRead(id: number, isChecked: boolean) {
    let indexBook = this.listBooks.findIndex((item) => item.id == id);
    if (indexBook !== -1) {
        this.listBooks[indexBook]['read'] = isChecked;
    } else {
        console.error('Книга с указанным id не найдена.');
    }
  }
}
