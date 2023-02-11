import { Component, OnInit } from '@angular/core';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  socialLinks: SocialItem[] = [
    {
      title: 'Github',
      url: 'https://github.com/santoshpisini',
      faIcon: 'github',
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/santoshpisini',
      faIcon: 'linkedin-in',
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/santosh_pisini',
      faIcon: 'instagram',
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/santosh_pisini',
      faIcon: 'twitter',
    },
  ];
  constructor(private analytics: AnalyticsService) {}

  ngOnInit(): void {}

  openLink(item: SocialItem) {
    this.analytics.logEvent('open_social_link', {
      title: item.title,
      url: item.url,
    });
    window.open(item.url, '_blank');
  }
}

interface SocialItem {
  title: string;
  url: string;
  faIcon: IconName;
}
