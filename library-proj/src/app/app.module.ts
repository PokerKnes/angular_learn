import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterSection } from './components/library-module/test-request/filter-section.component';
import { LibraryModule } from './components/library-module/library.module';
import { GetBooksService } from './services/get-books.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibraryModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    GetBooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
