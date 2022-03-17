import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from "aos";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activeLang = window.localStorage.getItem('language');

  constructor(private translate: TranslateService) {
    if(this.activeLang === null){
      this.translate.setDefaultLang('en');
    }else{
      this.translate.setDefaultLang(this.activeLang);
    }
   }

  ngOnInit(): void {
    AOS.init();
  }

  public changeLanguage(lang: any){
    this.translate.use(lang);
    window.localStorage.setItem('language', lang);
  }

}
