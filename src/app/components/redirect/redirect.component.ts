import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {
  constructor(
    private analytics: AnalyticsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  map: RedirectMap[] = [
    {
      key: 'resume',
      url: environment.resumeLink,
    },
  ];

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      const url = this.map.find((x) => x.key == data.key)?.url ?? undefined;
      if (url) {
        this.analytics.logEvent('redirect', {
          url: url,
          key: data.key,
        });
        window.open(url, '_blank');
        this.router.navigate(['/']);
      } else {
        this.analytics.logEvent('redirect_fail', {
          data: data,
        });
      }
    });
  }
}

interface RedirectMap {
  key: string;
  url: string;
}
