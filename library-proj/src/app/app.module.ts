import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryModule } from './components/library-module/library.module';
import { GetBooksService } from './services/get-books.service';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { MainModule } from './components/main/main.module';
import { EmptyRouteModule } from './components/empty-route/empty-route.module';
import { HeaderModule } from './components/header/header.module';
import { RouterOutlet, RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainModule,
    EmptyRouteModule,
    HeaderModule,
    LibraryModule
  ],
  providers: [
    provideClientHydration()
    // { provide: HTTP_INTERCEPTORS, useClass: FetchInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
