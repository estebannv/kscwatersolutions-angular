import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle("KSC Water Key Solutions | Services");
  }

  ngOnInit(): void {
  }

}
