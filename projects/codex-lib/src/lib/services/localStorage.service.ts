import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getItem(applicationName: string, key: string): any | null {
    return JSON.parse(localStorage.getItem(`${applicationName}-${key}`)!);
  }

  setItem(applicationName: string, key: string, value: any): void {
    localStorage.setItem(`${applicationName}-${key}`, JSON.stringify(value));
  }

  removeItem(applicationName: string, key: string): void {
    localStorage.removeItem(`${applicationName}-${key}`);
  }

  clearAll(): void {
    localStorage.clear();
  }

  itemsLength(): number {
    return localStorage.length;
  }
}
