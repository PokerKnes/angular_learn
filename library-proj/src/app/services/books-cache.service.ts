import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ListBooksCache {
    cacheUrl: string = '';
    flagResetPaginatorCache: boolean = true;
    changeFirstButton: number = 2;
    changeSecondButton: number = 3;
    changeThirdButton: number = 4;
    leftEllipsis: boolean = false;
    rightEllipsis: boolean = false;
    currentPagePaginator: number = 1;
    countPages: number = 1;
    response: any = null;
    cache: any;
    setCache(data: any, countPages: number) {
        this.cache = data.results;
        this.response = data;
        this.countPages = countPages;
    }
    setCurrentPage(page: number) {
        this.currentPagePaginator = page;
    }
    setPaginatorData(changeFirstButton: number, changeSecondButton: number, changeThirdButton: number, leftEllipsis: boolean, rightEllipsis: boolean) {
        this.changeFirstButton = changeFirstButton; 
        this.changeSecondButton = changeSecondButton; 
        this.changeThirdButton = changeThirdButton; 
        this.leftEllipsis = leftEllipsis; 
        this.rightEllipsis = rightEllipsis;
    }
    resetPaginatorData() {
        this.changeFirstButton = 2; 
        this.changeSecondButton = 3; 
        this.changeThirdButton = 4; 
        this.leftEllipsis = false; 
        this.rightEllipsis = false;
        this.currentPagePaginator = 1;
        this.flagResetPaginatorCache = true;
    }
    setFlagCache() {
        this.flagResetPaginatorCache = false;
    }
    setUrl(url: string) {
        this.cacheUrl = url
    }
}