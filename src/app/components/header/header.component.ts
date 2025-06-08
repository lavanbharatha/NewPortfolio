import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent implements AfterViewInit {
  isMenuOpen = false;
  isDarkTheme = false;
  activeSection = 'home';

  navItems = [

    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  constructor(private viewportScroller: ViewportScroller) { }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    this.viewportScroller.scrollToAnchor(sectionId);
    this.isMenuOpen = false;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = this.navItems.map(item => item.id);

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 150) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  ngAfterViewInit() {
    var tl = gsap.timeline();
    tl.from('.navbar-brand', {
      opacity: 0,
      y: -100,
      duration: 0.5,
    }, "nav");
    tl.from('.nav-item', {
      opacity: 0,
      y: -10,
      stagger: {
        amount: 0.6,
        ease: "power2.out"
      },
      duration: 0.5,
      scrub: 2,
    }, "nav");

  }

}
