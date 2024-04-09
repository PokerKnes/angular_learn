import { Component, ElementRef, ViewChild } from '@angular/core';
import { GetBooksService } from '../../../services/get-books.service';
import { title } from 'process';

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
  selector: 'filter-section',
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.scss',
})
export class FilterSection {
  @ViewChild('select') select: ElementRef | undefined;
  listLang: [string, string][] = Object.entries(Languages);
  authorFilter: string = '';
  titleFilter: string = '';
  subjectFilter: string = '';
  selectFilter: string[] = [];
  private defaultUrl: string = 'https://gutendex.com/books/';
  constructor(private dataService: GetBooksService) {}
  responseData: any;

  search() {
    // console.log(`select: ${this.selectFilter}\nauthor: ${this.authorFilter}\ntitle: ${this.titleFilter}\nsubject: ${this.subjectFilter}`)
    let resultUrl = '';
    let querySelectFilter = this.selectFilter.join(',');
    let queryAuthorTitle = '';

    if (querySelectFilter != '') {
      resultUrl += 'https://gutendex.com/books/?languages=' + querySelectFilter;
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
      let formatSubjectFilter = this.subjectFilter.trim().replace(/ +/g, '%20');
      if (resultUrl != '') {
        resultUrl += '&topic=' + formatSubjectFilter;
      } else {
        resultUrl += 'https://gutendex.com/books/?topic=' + formatSubjectFilter;
      }
    }
    if (resultUrl == '') {
      resultUrl = 'https://gutendex.com/books';
    }
    // console.log(`url: ${resultUrl}`);
    this.dataService.getBooks(resultUrl).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data.count != 0) {
          this.responseData = data;
        } else {
          this.responseData = null;
        }
      },
      error: (error) => console.log(error),
    });
  }
}
