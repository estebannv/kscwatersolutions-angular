import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isValid: boolean = false;

  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  constructor(private titleService: Title) {
    this.titleService.setTitle("KSC Water Key Solutions | Contact");
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
