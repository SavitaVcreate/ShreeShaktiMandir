import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './reuseable/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar],
import { Footer } from './footer/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ShreeShaktiMandir');
}
