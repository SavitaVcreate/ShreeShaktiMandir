import { Component } from '@angular/core';
import { Navbar } from '../../reuseable/navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [Navbar, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // currentIndex = 0;

  // slides = ['assets/background/bg1.png', 'assets/background/bg6.jpg', 'assets/background/bg7.jpg'];
  // ngOnInit(): void {
  //   this.autoSlide();
  // }

  // autoSlide(): void {
  //   setInterval(() => {
  //     this.nextSlide();
  //   }, 2000);
  // }

  // nextSlide(): void {
  //   this.currentIndex++;

  //   if (this.currentIndex >= this.slides.length) {
  //     this.currentIndex = 0;
  //   }
  // }

  // prevSlide(): void {
  //   this.currentIndex--;

  //   if (this.currentIndex < 0) {
  //     this.currentIndex = this.slides.length - 1;
  //   }
  // }
  isLoading = true;

  currentIndex = 0;
  sliderInterval: any;

  slides = ['assets/background/bg1.png', 'assets/background/bg6.jpg', 'assets/background/bg7.jpg'];

  ngOnInit(): void {
    this.autoSlide();
  }

  autoSlide(): void {
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide(): void {
    this.currentIndex++;

    if (this.currentIndex >= this.slides.length) {
      this.currentIndex = 0;
    }
  }

  prevSlide(): void {
    this.currentIndex--;

    if (this.currentIndex < 0) {
      this.currentIndex = this.slides.length - 1;
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.sliderInterval);
  }
}
