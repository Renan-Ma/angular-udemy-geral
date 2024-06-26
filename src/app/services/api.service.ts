import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // novo
  public name = signal("Renan Martinez")

  // antigo
  public name$ = new BehaviorSubject("Renan $")

  constructor() { }
}
