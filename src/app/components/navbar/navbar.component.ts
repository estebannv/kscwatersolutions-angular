import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activeLang = window.sessionStorage.getItem('language');

  constructor(private translate: TranslateService) {
    if(this.activeLang === null){
      this.translate.setDefaultLang('en');
    }else{
      this.translate.setDefaultLang(this.activeLang);
    }
   }

  ngOnInit(): void {

  }

  public changeLanguage(lang: any){
    this.translate.use(lang);
    window.sessionStorage.setItem('language', lang);
  }

}
