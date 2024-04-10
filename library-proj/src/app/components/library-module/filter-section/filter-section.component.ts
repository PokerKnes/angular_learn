import { Component, ElementRef, ViewChild } from '@angular/core';
import { GetBooksService } from '../../../services/get-books.service';
import { PaginatorComponent } from '../../paginator/paginator.component';
import { ListBooksCache } from '../../../services/books-cache.service';

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

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.scss',
})
export class FilterSection {
  @ViewChild('select') select: ElementRef | undefined;
  countPages: number = 1;
  listLang: [string, string][] = Object.entries(Languages);
  authorFilter: string = '';
  titleFilter: string = '';
  subjectFilter: string = '';
  selectFilter: string[] = [];
  constructor(
    private dataService: GetBooksService,
    private cacheService: ListBooksCache
  ) {}
  responseData: any;
  changeSimulate: boolean = true;

  reset() {
    this.cacheService.resetPaginatorData();
    
  }

  search(page: string, flagCurrentComp?: boolean) {
   
    let resultUrl = '';
    if (this.cacheService.flagResetPaginatorCache) {
      let querySelectFilter = this.selectFilter.join(',');
      let queryAuthorTitle = '';

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
      if (resultUrl == '') {
        
        resultUrl = `https://gutendex.com/books/?page=${page}`; 
      
        this.cacheService.setUrl(resultUrl.replace(/(?<=page\=)\d+/g, ''));
      } else {
        
        resultUrl += `&page=${page}`;
        
        this.cacheService.setUrl(resultUrl.replace(/(?<=page\=)\d+/g, ''));
      }
    } else {
      resultUrl = this.cacheService.cacheUrl + page;
      
    }
    if ((resultUrl.replace(/(?<=page\=)\d+/g, '') === this.cacheService.cacheUrl) && flagCurrentComp) {
      this.changeSimulate = !this.changeSimulate;
    }

    // console.log(`url: ${resultUrl}`);
    this.dataService.getBooks(resultUrl).subscribe({
      next: (data: any) => {
        if (data.count != 0) {
          this.responseData = data;
          this.countPages = Math.ceil(data.count / 32);
          this.cacheService.setCache(data, this.countPages);
        } else {
          this.responseData = null;
          this.countPages = 1;
        }
      },
      error: (error) => console.log(error),
    });
  }

  ngOnInit(): void {
    this.countPages = this.cacheService.countPages;
    this.responseData = this.cacheService.response;
  }
}
