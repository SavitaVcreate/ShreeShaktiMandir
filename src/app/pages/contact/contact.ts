import { Component } from '@angular/core';
import { Navbar } from '../../reuseable/navbar/navbar';
import { Footer } from '../../footer/footer/footer';

@Component({
  selector: 'app-contact',
  imports: [Navbar, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
