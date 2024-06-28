import { Injectable } from '@angular/core';
import { environment } from '@committee-env/environment';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getItem(key: string): any | null {
    return JSON.parse(localStorage.getItem(`${environment.applicationName}-${key}`)!);
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(`${environment.applicationName}-${key}`, JSON.stringify(value));
  }

  removeItem(key: string): void {
    localStorage.removeItem(`${environment.applicationName}-${key}`);
  }

  clearAll(): void {
    localStorage.clear();
  }

  itemsLength(): number {
    return localStorage.length;
  }
}
