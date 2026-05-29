import { Component } from '@angular/core';
import { Navbar } from '../../reuseable/navbar/navbar';
import { Footer } from '../../footer/footer/footer';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [Navbar, Footer, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  selectedService = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.selectedService = params['service'] || '';
    });
  }
}
