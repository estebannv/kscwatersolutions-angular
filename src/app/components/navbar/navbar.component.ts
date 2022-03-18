import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from "aos";
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activeLang = window.localStorage.getItem('language');

  constructor(private translate: TranslateService,private router: Router) {
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

  projects(){
    this.router.navigate(['/projects']);
  }

}
