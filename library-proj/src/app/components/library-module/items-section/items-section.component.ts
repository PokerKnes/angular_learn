import { Input, Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { ListBooksCache } from "../../../services/books-cache.service";

@Component({
  selector: 'app-items-section',
  templateUrl: './items-section.component.html',
  styleUrl: './items-section.component.scss'
})
export class ItemsSectionComponent {
  constructor(private router: Router, private route: ActivatedRoute, private cacheService: ListBooksCache) {}
  @Input() itemsList: any;

  public redirectTo(id: number): void {
    this.cacheService.setFlagCache()
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
}
