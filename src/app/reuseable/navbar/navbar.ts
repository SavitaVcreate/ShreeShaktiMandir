import {
  Component,
  AfterViewInit,
  ElementRef,
  Renderer2,
  HostListener,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar implements OnInit, AfterViewInit {
  isLoading: boolean = true;
  isSearchActive: boolean = false;
  marqueeText: string = 'Jai Shree Shakti Mata |  जय श्री शक्ति माता ';
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {}

  // =========================
  // Page Loader
  // =========================

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.cdr.detectChanges();
    }, 2000);
  }

  preloader(): void {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.isLoading = false;
        this.cdr.detectChanges();
      }, 100);
    });
  }

  // =========================
  // After View Init
  // =========================

  ngAfterViewInit(): void {
    this.mobileMenu();
    this.offcanvasSidebar();
  }

  // =========================
  // Search Toggle
  // =========================

  openSearch(): void {
    this.isSearchActive = true;
  }

  closeSearch(): void {
    this.isSearchActive = false;
  }

  // =========================
  // Mobile Menu
  // =========================

  mobileMenu(): void {
    const menuBtn = this.el.nativeElement.querySelector('.mobile-menu-btn');

    const mobileMenu = this.el.nativeElement.querySelector('.mobile-menu');

    if (menuBtn && mobileMenu) {
      this.renderer.listen(menuBtn, 'click', () => {
        mobileMenu.classList.toggle('active');
      });
    }
  }

  // =========================
  // Offcanvas Sidebar
  // =========================

  offcanvasSidebar(): void {
    const dropdownBtns = this.el.nativeElement.querySelectorAll('#offcanvas-sidebar .dropdown-btn');

    dropdownBtns.forEach((btn: HTMLElement) => {
      this.renderer.listen(btn, 'click', () => {
        btn.classList.toggle('open');

        const submenu = btn.previousElementSibling as HTMLElement;

        if (submenu) {
          submenu.classList.toggle('show');
        }
      });
    });
  }

  // =========================
  // Sticky Header
  // =========================

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const header = this.el.nativeElement.querySelector('.header .header-lower');

    if (window.scrollY > 250) {
      header?.classList.add('sticky');
    } else {
      header?.classList.remove('sticky');
    }
  }
}
