import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Header } from '../header/header';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Footer } from '../../footer/footer/footer';

Swiper.use([Autoplay, Pagination]);
@Component({
  selector: 'app-home',
  imports: [Header, CommonModule, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  selectedImage: string = '';
  showVideo = false;

  videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  galleryImages: string[] = [
    'assets/gallery/gallery-1.jpg',
    'assets/gallery/gallery-2.jpg',
    'assets/gallery/gallery-3.jpg',
    'assets/gallery/gallery-4.jpg',
    'assets/gallery/gallery-5.jpg',
    'assets/gallery/gallery-6.png',
  ];

  currentImageIndex = 0;

  openImage(image: string): void {
    this.selectedImage = image;

    this.currentImageIndex = this.galleryImages.indexOf(image);
  }

  nextImage(): void {
    this.currentImageIndex++;

    if (this.currentImageIndex >= this.galleryImages.length) {
      this.currentImageIndex = 0;
    }

    this.selectedImage = this.galleryImages[this.currentImageIndex];
  }

  prevImage(): void {
    this.currentImageIndex--;

    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.galleryImages.length - 1;
    }

    this.selectedImage = this.galleryImages[this.currentImageIndex];
  }

  closeImage(): void {
    this.selectedImage = '';
  }

  openVideo(): void {
    this.showVideo = true;

    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/ipzP83aB91Q?autoplay=1',
    );
  }

  closeVideo(): void {
    this.showVideo = false;
  }

  ngAfterViewInit(): void {
    const serviceSlider = document.querySelector('.services-slider');

    if (serviceSlider) {
      new Swiper('.services-slider', {
        loop: true,

        speed: 1200,

        spaceBetween: 20,

        slidesPerView: 3,

        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        breakpoints: {
          0: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          992: {
            slidesPerView: 3,
          },
        },
      });
    }

    this.checkAnimation();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkAnimation();
  }

  checkAnimation(): void {
    const elements = document.querySelectorAll('.fade-left, .fade-right, .fade-up');

    elements.forEach((element: any) => {
      const position = element.getBoundingClientRect().top;

      const screenPosition = window.innerHeight / 1.2;

      if (position < screenPosition) {
        element.classList.add('active');
      }
    });
  }
}
