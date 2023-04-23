import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navItems: NavItem[] = [
    { text: 'About', sectionLink: 'about' },
    { text: 'Work', sectionLink: 'work' },
    { text: 'Project', sectionLink: 'project' },
    { text: 'Contact', sectionLink: 'contact' },
  ];
  constructor(private analytics: AnalyticsService) {
    this.navItems = [];
  }

  ngOnInit(): void {}

  scrollTo(element: any): void {
    console.log(element);

    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  openResume() {
    this.analytics.logEvent('open_resume', { url: environment.resumeLink });
    window.open(environment.resumeLink, '_blank');
  }

  openClipboard() {
    this.analytics.logEvent('open_app', {
      label: 'Clipboard',
      url: 'https://clipboard-ashy.vercel.app',
    });
    window.open('https://clipboard-ashy.vercel.app', '_blank');
  }
}

interface NavItem {
  text: string;
  sectionLink: string;
}
