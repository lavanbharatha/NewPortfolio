import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: string;
  icon: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Backend Development',
      skills: [
        { name: 'Java', level: 'Experienced', icon: 'fa-brands fa-java' },
        { name: 'Spring Boot', level: 'Experienced', icon: 'bi bi-gear-fill' },
        { name: 'REST APIs', level: 'Experienced', icon: 'bi bi-hdd-network' },
        { name: 'Microservices', level: 'Experienced', icon: 'bi bi-diagram-3' }
      ]
    },
    {
      name: 'Frontend Development',
      skills: [
        { name: 'Angular18', level: 'Experienced', icon: 'fa-brands fa-angular' },
        { name: 'HTML5', level: 'Experienced', icon: 'fa-brands fa-html5' },
        { name: 'TypeScript', level: 'Intermediate', icon: 'bi bi-bootstrap' },
        { name: 'CSS3', level: 'Experienced', icon: 'fa-brands fa-css' },
        { name: 'Bootstrap5', level: 'Experienced', icon: 'fa-brands fa-bootstrap' },
        { name: 'JavaScript', level: 'Intermediate', icon: 'fa-brands fa-js' },
        
      ]
    },
    {
      name: 'DataBases & Other Tools',
      skills: [
        { name: 'MySQL', level: 'Experienced', icon: 'bi bi-database-fill' },
        { name: 'GitHub', level: 'Experienced', icon: 'fa-brands fa-github' },
              ]
    }
  ];
}
