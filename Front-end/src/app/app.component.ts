import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-p-yeboah';
  showSideBar: boolean = false
  showActions: boolean = true
  routerUrl: string = ''
  showNavBar: boolean = false
  showFooter: boolean = false

  constructor(private router: Router) {
    router.events.pipe(
      filter(e => e instanceof RouterEvent)
    ).subscribe((e: any) => {
      if (e.urlAfterRedirects !== undefined) {
        e.url = e.urlAfterRedirects
      } else {
        this.configureRoute(e)
      }
    })
  }

  ngOnInit(): void {
    // Scroll to top after route change
    this.router.events.subscribe((evt: any) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  configureRoute(event: any) {
    let index = event['url'].indexOf('?')
    this.routerUrl = index != -1 ? event['url'].substring(0, index) : event['url']
    if (this.routerUrl.includes('/admin/workshop') || this.routerUrl.includes('/admin/online-shop') || this.routerUrl.includes('/admin/landing-page')) {
      // (this.routerUrl === '/admin/workshop' || this.routerUrl === '/admin/online-shop' || this.routerUrl === '/admin/landing-page')
      this.showSideBar = true
      if (event['url'] === '/admin') {
        this.showActions = true
      }
    } else {
      this.showSideBar = false
      this.showActions = false

    }
    if (this.routerUrl.includes('/shop')) {
      this.showNavBar = true
    } else {
      this.showNavBar = false
    }

    if (this.routerUrl.includes('/shop') || this.routerUrl.includes('/training')) {
      this.showFooter = true
    } else {
      this.showFooter = false
    }

  }
}
