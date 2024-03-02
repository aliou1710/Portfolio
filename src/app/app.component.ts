import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolios';
  local: string;

  constructor(translate: TranslateService, private dbService : NgxIndexedDBService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    translate.use('fr');
  }

 
}
