import { Injectable } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { NavigationLink } from '../contracts/navigation-link';
import { UrlInspector } from './ur-inspector.service';

declare type LazyLoadedRouteCandidate = Route & {
  _loadedConfig?: { routes: Route[] };
};

@Injectable({
  providedIn: 'root'
})
export class NavigationCrawler {
  private links$$ = new BehaviorSubject<NavigationLink[]>([]);

  constructor(private router: Router, private urlInspector: UrlInspector) {}

  getLinks(): Observable<NavigationLink[]> {
    this.links$$.next(this._fromPresentRouterConfig(this.router.config));

    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((navigationEnd: NavigationEnd) => {
        const rootFragment = this.urlInspector.rootFrom(navigationEnd.url);
        const candidate: LazyLoadedRouteCandidate = this.router.config.find(
          route => route.path === rootFragment
        );

        if (this._containsChildren(candidate)) {
          return this._linksEnhancedWithChildren(this.links$$.value, candidate);
        }

        return this.links$$.value;
      }),
      switchMap((links: NavigationLink[]) => {
        this.links$$.next(links);
        return this.links$$.asObservable();
      })
    );
  }

  _fromPresentRouterConfig(config: Route[]): NavigationLink[] {
    return config
      .filter(route => route.data && route.data.navigation)
      .map(route => ({
        text: route.data.navigation.label,
        path: route.path,
        children: []
      }));
  }

  _containsChildren(candidate: LazyLoadedRouteCandidate): boolean {
    return candidate._loadedConfig && candidate._loadedConfig.routes.length > 0;
  }

  _linksEnhancedWithChildren(
    links: NavigationLink[],
    parent: LazyLoadedRouteCandidate
  ): NavigationLink[] {
    const children = this._fromPresentRouterConfig(parent._loadedConfig.routes);

    return links.map(link =>
      link.path === parent.path
        ? {
            ...link,
            children: children.map(child =>
              this._buildNavigationUrl(child, parent)
            )
          }
        : link
    );
  }

  private _buildNavigationUrl(
    child: NavigationLink,
    parent: LazyLoadedRouteCandidate
  ): NavigationLink {
    return {
      ...child,
      path: `${parent.path}/${child.path}`
    };
  }
}
