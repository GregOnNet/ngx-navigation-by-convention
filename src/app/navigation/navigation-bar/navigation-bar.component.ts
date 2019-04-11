import { Component, OnInit } from '@angular/core';
import { NavigationCrawler } from '../lib/navigation-crawler.service';
import { NavigationLink } from '../contracts/navigation-link';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  navigationLinks$: Observable<NavigationLink[]>;

  constructor(private navigation: NavigationCrawler) {}

  ngOnInit() {
    this.navigationLinks$ = this.navigation.getLinks();
  }
}
