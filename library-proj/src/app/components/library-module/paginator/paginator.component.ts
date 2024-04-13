import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import {
  GetBooksService,
  IdataTransferGetBooks
} from '../../../services/get-books.service';
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  constructor(
    private dataService: GetBooksService
  ) {}
  @Output() loadPage = new EventEmitter<string>();
  currentPage?: number;
  leftEllipsis: boolean = false;
  rightEllipsis: boolean = false;
  firstButtonValue: number = 1;
  changeFirstButton: number = 2;
  changeSecondButton: number = 3;
  changeThirdButton: number = 4;
  lastButtonValue?: number;

  providePage(page: string) {
    this.loadPage.emit(page);
  }

  changePage(value: number) {
    if (this.lastButtonValue == undefined) return;
    if (this.currentPage == value) return;
    this.currentPage = value;
    this.calcButtonsValues(value, this.lastButtonValue)
    this.providePage(value + '');
  }

  calcButtonsValues(currentPage: number, lastPage: number) {
    this.currentPage = currentPage;
    if(this.lastButtonValue == undefined) return

    if (this.lastButtonValue < 6) {
      this.changeFirstButton = 2;
      this.changeSecondButton = 3;
      this.changeThirdButton = 4;
      this.leftEllipsis = false;
      this.rightEllipsis = false;
    } else
    {
      if (currentPage == 1) {
        this.changeFirstButton = 2;
        this.changeSecondButton = 3;
        this.changeThirdButton = 4;
        this.leftEllipsis = false;
        this.rightEllipsis = true;
        
      } else if (currentPage == lastPage) {
        this.changeFirstButton = this.lastButtonValue - 3;
        this.changeSecondButton = this.lastButtonValue - 2;
        this.changeThirdButton = this.lastButtonValue - 1;
        this.leftEllipsis = true;
        this.rightEllipsis = false;
        
      } else {
        if (
          currentPage - 2 <= this.firstButtonValue ||
          currentPage + 2 >= this.lastButtonValue
        ) {
          if (
            currentPage - 2 == this.firstButtonValue ||
            currentPage + 2 == this.lastButtonValue
          ) {
            this.changeFirstButton = currentPage - 1;
            this.changeSecondButton = currentPage;
            this.changeThirdButton = currentPage + 1;
          }
        } else {
          this.changeFirstButton = currentPage - 1;
          this.changeSecondButton = currentPage;
          this.changeThirdButton = currentPage + 1;
        }
        if (this.changeFirstButton - 1 != this.firstButtonValue) {
          this.leftEllipsis = true;
        } else {
          this.leftEllipsis = false;
        }
        if (this.changeThirdButton + 1 != this.lastButtonValue) {
          this.rightEllipsis = true;
        } else {
          this.rightEllipsis = false;
        }
      }      
    }
  }

  ngOnInit() {
    this.dataService
      .getDataObservable()
      .subscribe((data: IdataTransferGetBooks) => {
        this.currentPage = data.currentPage;
        this.lastButtonValue = data.countPages;
        this.calcButtonsValues(this.currentPage!, this.lastButtonValue!)
      });
    this.currentPage = this.dataService.currentPage;
    this.lastButtonValue = this.dataService.countPages;
    this.calcButtonsValues(this.currentPage!, this.lastButtonValue!)
  }
}
