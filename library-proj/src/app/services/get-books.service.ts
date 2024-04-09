import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class GetBooksService{
    constructor(private http: HttpClient){ }
         
    getBooks(url: string) : Observable<any> {
        return this.http.get(url);
    }
}