import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  GetBooksService,
  IdataTransferGetBooks,
} from '../../../services/get-books.service';
import { ActivatedRoute, Router } from '@angular/router';

enum Languages {
  Any = '',
  Afrikaans = 'af',
  Aleut = 'ale',
  Arabic = 'ar',
  Arapaho = 'arp',
  Bodo = 'brx',
  Breton = 'br',
  Bulgarian = 'bg',
  Caló = 'rmq',
  Catalan = 'ca',
  Cebuano = 'ceb',
  Chinese = 'zh',
  Czech = 'cs',
  Danish = 'da',
  Dutch = 'nl',
  English = 'en',
  Esperanto = 'eo',
  Estonian = 'et',
  Farsi = 'fa',
  Finnish = 'fi',
  French = 'fr',
  Frisian = 'fy',
  Friulian = 'fur',
  'Gaelic, Scottish' = 'gla',
  Galician = 'gl',
  Gamilaraay = 'kld',
  German = 'de',
  Greek = 'el',
  'Greek, Ancient' = 'grc',
  Hebrew = 'he',
  Hungarian = 'hu',
  Icelandicvalue = 'is',
  Iloko = 'ilo',
  Interlingua = 'ia',
  Inuktitut = 'iu',
  Irish = 'ga',
  Italian = 'it',
  Japanese = 'ja',
  Kashubian = 'csb',
  Khasi = 'kha',
  Korean = 'ko',
  Latin = 'la',
  Lithuanian = 'lt',
  Maori = 'mi',
  'Mayan Languages' = 'myn',
  'Middle English' = 'enm',
  Nahuatl = 'nah',
  'Napoletano-Calabrese' = 'nap',
  Navajo = 'nav',
  'North American Indian' = 'nai',
  Norwegian = 'no',
  Occitan = 'oc',
  Ojibwa = 'oji',
  'Old English' = 'ang',
  Polish = 'pl',
  Portuguese = 'pt',
  Romanian = 'ro',
  Russian = 'ru',
  Sanskrit = 'sa',
  Serbian = 'sr',
  Slovenian = 'sl',
  Spanish = 'es',
  Swedish = 'sv',
  Tagabawa = 'bgs',
  Tagalog = 'tl',
  Telugu = 'te',
  Welsh = 'cy',
  Yiddish = 'yi',
}

export interface IqueryListBooks {
  languages?: string,
  topic?: string,
  search?: string,
  page?: string
}

export interface IfilterTransfer {
  authorFilter: string;
  titleFilter: string;
  subjectFilter: string;
  selectFilter: string;
  query: IqueryListBooks
}

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.scss',
})
export class FilterSection {
  emptyHint: boolean = false;
  listLang: [string, string][] = Object.entries(Languages);
  authorFilter: string = '';
  titleFilter: string = '';
  subjectFilter: string = '';
  selectFilter: string = '';
  url: string = '';
  query: IqueryListBooks = {};
  searchInProgress: boolean = false;
  timeoutId: NodeJS.Timeout | null = null;
  viewHint: boolean = true;
  constructor(
    private dataService: GetBooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  search(page: string, queryParams?: IqueryListBooks) {
    this.searchInProgress = true
    let resultUrl = '';
    if (page == undefined) {
      page = '1';
    }

    let querySelectFilter = this.selectFilter;
    let queryAuthorTitle = '';
    if(queryParams == undefined) {
      if (querySelectFilter != '') {
        resultUrl +=
          'https://gutendex.com/books/?languages=' + querySelectFilter;
      }

      if (this.authorFilter.trim() != '') {
        let formatAuthorFilter = this.authorFilter.trim().replace(/ +/g, '%20');
        queryAuthorTitle += 'search=' + formatAuthorFilter;
      }
      if (this.titleFilter.trim() != '') {
        let formatTitleFilter = this.titleFilter.trim().replace(/ +/g, '%20');
        if (queryAuthorTitle != '') {
          queryAuthorTitle += '%20' + formatTitleFilter;
        } else {
          queryAuthorTitle += 'search=' + formatTitleFilter;
        }
      }
      if (queryAuthorTitle != '') {
        if (resultUrl != '') {
          resultUrl += '&' + queryAuthorTitle;
        } else {
          resultUrl += 'https://gutendex.com/books/?' + queryAuthorTitle;
        }
      }

      if (this.subjectFilter.trim() != '') {
        let formatSubjectFilter = this.subjectFilter
          .trim()
          .replace(/ +/g, '%20');
        if (resultUrl != '') {
          resultUrl += '&topic=' + formatSubjectFilter;
        } else {
          resultUrl +=
            'https://gutendex.com/books/?topic=' + formatSubjectFilter;
        }
      }
    } else {
      if(queryParams.languages) {
        resultUrl +='https://gutendex.com/books/?languages=' + queryParams.languages;
      }
      if(queryParams.search) {
        if (resultUrl != '') {
          resultUrl += '&search=' + queryParams.search;
        } else {
          resultUrl += 'https://gutendex.com/books/?search=' + queryParams.search;
        }
      }
      if(queryParams.topic) {
        if (resultUrl != '') {
          resultUrl += '&topic=' + queryParams.topic;
        } else {
          resultUrl += 'https://gutendex.com/books/?topic=' + queryParams.topic;
        }
      }
    }
    if (resultUrl == '') {
      resultUrl = `https://gutendex.com/books/?page=${page}`;
    } else {
      resultUrl += `&page=${page}`;
    }

    this.dataService.getBooks(resultUrl, page);
    let filterDataCache: IfilterTransfer = {
      authorFilter: this.authorFilter,
      titleFilter: this.titleFilter,
      subjectFilter: this.subjectFilter,
      selectFilter: this.selectFilter,
      query: this.query
    };
    this.dataService.setDataFilter(filterDataCache);
  }

  searchRedirect(page: string = '1') {
    let query: IqueryListBooks = {};
    if (this.selectFilter != '') query.languages = this.selectFilter;
    if (this.subjectFilter != '') query.topic = this.subjectFilter.trim()
    let queryAuthor = this.authorFilter.trim()
    let queryTitle = this.titleFilter.trim()
    let queryAuthorTitle = '';
    if (queryTitle != '' && queryAuthor != '') {
      queryAuthorTitle = queryTitle + ' ' + queryAuthor;
    } else if (queryTitle != '') {
      queryAuthorTitle = queryTitle;
    } else {
      queryAuthorTitle = queryAuthor;
    }
    if (queryAuthorTitle != '') query.search = queryAuthorTitle;
    query.page = page;

    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    if (Object.keys(this.query).length != 0 && JSON.stringify(this.query) === JSON.stringify(query)) {
      this.viewHint = false
      this.timeoutId = setTimeout(() => {
      this.timeoutId = null;
      
      this.viewHint = true
      }, 1000);
      return
    }
    this.query = query;

    this.router.navigate(['/book-search'], {
      relativeTo: this.route,
      queryParams: query,
    });
  }

  ngOnInit(): void {
    this.dataService
      .getDataObservable()
      .subscribe((data: IdataTransferGetBooks) => {
        this.emptyHint = data.emptyHint;
        this.url = data.url;
        this.searchInProgress = data.searchInProgress
      });
      this.authorFilter = this.dataService.authorFilter;
      this.titleFilter = this.dataService.titleFilter;
      this.subjectFilter = this.dataService.subjectFilter;
      this.selectFilter = this.dataService.selectFilter;
      this.query = this.dataService.query;
      this.emptyHint = this.dataService.emptyHint;
      this.url = this.dataService.url;

    this.route.queryParams.subscribe((queryParams) => {
      if (Object.keys(queryParams).length == 0) {
        queryParams = this.query
      }
      let page = queryParams['page'];
      if(Object.keys(queryParams).length !== 0) {
        this.search(page, queryParams);
      }
    });
    
  }
}
