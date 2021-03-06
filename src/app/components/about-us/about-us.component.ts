import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle("KSC Water Key Solutions | About Us");
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
