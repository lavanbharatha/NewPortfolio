import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FadeInDirective } from './shared/directives/fade-in.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FadeInDirective
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    // Smooth scrolling for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  ngAfterViewInit() {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const section = entry.target as HTMLElement;
        
        // Add animation only when the section enters the viewport
        if (entry.isIntersecting) {
          // Trigger animation only if not previously visited
          if (!section.classList.contains('animated')) {
            section.classList.add('in-view');
            section.classList.add('animated');
          }
        }
      });
    }, {
      threshold: 0.4,  // When 40% of the section is visible
      rootMargin: '0px 0px 100px 0px'  // Allow a slight margin before entering view
    });

    sections.forEach(section => observer.observe(section));
  }

  onSectionChange(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
