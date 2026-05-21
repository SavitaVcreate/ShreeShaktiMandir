import { Component } from '@angular/core';
import { Navbar } from '../../reuseable/navbar/navbar';
import { Footer } from '../../footer/footer/footer';

@Component({
  selector: 'app-donation',
  imports: [Navbar, Footer],
  templateUrl: './donation.html',
  styleUrl: './donation.css',
})
export class Donation {}
