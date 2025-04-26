import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'portfolio';
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  onSectionChange(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
