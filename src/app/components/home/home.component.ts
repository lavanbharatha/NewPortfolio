import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HomeComponent implements AfterViewInit, OnInit {

  keySkills = [
    'Java Backend Development',
    'RESTful API Design',
    'Microservices Architecture',
       'Database Management (MySQL)',
      'CI/CD Pipelines',
    'Problem Solving',
    'Team Collaboration',
  ];

  summary: string = `A passionate Java Developer with hands-on experience in building scalable web applications using Java, SpringBoot, Angular18, and MySQL. I thrive in fast-paced environments and enjoy translating complex business needs into intuitive digital solutions. My strengths lie in clean code practices, efficient RESTful API design, and building responsive, modern UIs.`;

  summaryWords: string[] = [];

  constructor(private viewportScroller: ViewportScroller) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    this.summaryWords = this.summary.split(' ');
  }

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  ngAfterViewInit() {
    const t1 = gsap.timeline();


    t1.from('.hero-intro h1', {
      opacity: 0,
      y: -1000,
      delay: 1,
      duration: 0.5,
    }, 'tl')
      .from('.highlight', {
        opacity: 0,
        delay: 2,
        duration: 0.5
      }, 'tl')
      .from('.subtitle', {
        opacity: 0,
        y: 1000,
        delay: 1,
        duration: 0.5,
      }, 'tl');


    t1.from('.summary-word', {
      opacity: 0,
      x: -30,
      // duration: 0,
      stagger: 0.03,
      delay: 0.1,
      ease: 'power2.out'
    });


    t1.from('.hero-buttons', {
      opacity: 0,
      x: -50,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out',
      // scrollTrigger: {
      //   trigger: '.hero-buttons',
      //   start: 'top 70%',
      // }
    });


    t1.from('.skills-grid .skill-item,.subsection-title', {
      opacity: 0,
      duration: 0.5,

      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 70%',

      }
    });
  }
}
