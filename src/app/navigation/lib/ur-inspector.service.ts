import { Injectable } from '@angular/core';
import { UrlSerializer } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlInspector {
  constructor(private serializer: UrlSerializer) {}

  rootFrom(url: string): string {
    return url && url.trim().length > 0
      ? this.serializer.parse(url).root.children.primary.segments[0].path
      : '';
  }
}
