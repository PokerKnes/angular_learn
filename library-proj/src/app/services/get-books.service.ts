import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IfilterTransfer, IqueryListBooks } from '../components/library-module/filter-section/filter-section.component';
import { ActivatedRoute, Router } from '@angular/router';
export interface IdataTransferGetBooks {
  url: string;
  listBookPage?: any[];
  countPages?: number;
  currentPage?: number;
  emptyHint: boolean;
  query: IqueryListBooks;
  searchInProgress: boolean
}
@Injectable()
export class GetBooksService {
  constructor(private http: HttpClient, @Inject (Router) private router: Router, @Inject (Router) private route: ActivatedRoute) {}
  emptyHint: boolean = false; 
  url: string = '';
  listBookPage?: any[];
  countPages?: number;
  currentPage?: number;
  
  authorFilter: string = '';
  titleFilter: string = '';
  subjectFilter: string = '';
  selectFilter: string = '';
  query: IqueryListBooks = {};
  searchInProgress: boolean = false;
  private dataSubject = new Subject<IdataTransferGetBooks>();

  getDataObservable() {
    return this.dataSubject.asObservable();
  }

  updateData() {
    let data: IdataTransferGetBooks = {
      url: this.url,
      listBookPage: this.listBookPage,
      countPages: this.countPages,
      currentPage: this.currentPage,
      emptyHint: this.emptyHint,
      query: this.query,
      searchInProgress: this.searchInProgress
    };
    this.dataSubject.next(data);
  }

  setDataFilter(data: IfilterTransfer) {
    this.authorFilter = data.authorFilter;
    this.titleFilter = data.titleFilter;
    this.subjectFilter = data.subjectFilter;
    this.selectFilter = data.selectFilter;
    this.query = data.query;
  }
  async getBooks(
    recUrl: string,
    page: string
  ): Promise<void> {
    this.currentPage = +page;
    this.url = recUrl;
    this.searchInProgress = true;
    this.emptyHint = false;
    this.updateData();
    try {
      const data: any = await this.http.get(recUrl).toPromise();
      if (data.count !== 0) {
        data.results.forEach((item: any) => {
          item.authorsFormat = item.authors
            .map((author: any) => author.name)
            .join('; ');
          item.subjectsFormat = item.subjects.join('; ');
          item.read = false;
        });
        this.listBookPage = data.results;
        const countPages = Math.ceil(data.count / 32);
        this.countPages = countPages;
        this.searchInProgress = false;
        this.emptyHint = false;
        this.updateData();
      } else {
        this.listBookPage = undefined;
        this.countPages = 0;
        this.searchInProgress = false;
        this.emptyHint = true;
        this.updateData();
      }
    } catch (error) {
      this.listBookPage = undefined;
      this.countPages = 0;
      this.searchInProgress = false;
      this.emptyHint = true;
      this.updateData();
      console.error('Ошибка при получении данных:', error);
    } 
  }
}
