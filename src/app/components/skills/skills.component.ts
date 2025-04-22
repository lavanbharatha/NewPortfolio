import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
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
        { name: 'Java', level: 90, icon: 'bi bi-filetype-java' },
        { name: 'Spring Boot', level: 85, icon: 'bi bi-gear-fill' },
        { name: 'REST APIs', level: 85, icon: 'bi bi-hdd-network' },
        { name: 'Microservices', level: 80, icon: 'bi bi-diagram-3' }
      ]
    },
    {
      name: 'Frontend Development',
      skills: [
        { name: 'Angular', level: 85, icon: 'bi bi-code-slash' },
        { name: 'HTML5', level: 90, icon: 'bi bi-filetype-html' },
        { name: 'CSS3', level: 85, icon: 'bi bi-filetype-css' },
        { name: 'Bootstrap', level: 90, icon: 'bi bi-bootstrap' }
      ]
    },
    {
      name: 'Database & Tools',
      skills: [
        { name: 'MySQL', level: 85, icon: 'bi bi-database-fill' },
        { name: 'PostgreSQL', level: 80, icon: 'bi bi-database' },
        { name: 'Redis', level: 75, icon: 'bi bi-hdd-stack' },
        { name: 'Git', level: 90, icon: 'bi bi-git' }
      ]
    },
    {
      name: 'Other Skills',
      skills: [
        { name: 'Agile/Scrum', level: 85, icon: 'bi bi-kanban' },
        { name: 'CI/CD', level: 80, icon: 'bi bi-infinity' },
        { name: 'Testing', level: 80, icon: 'bi bi-bug' },
        { name: 'Documentation', level: 85, icon: 'bi bi-file-text' }
      ]
    }
  ];
} 