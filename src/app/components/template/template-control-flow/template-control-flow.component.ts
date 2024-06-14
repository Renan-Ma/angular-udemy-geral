import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Observable, of, delay } from 'rxjs';


@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss',
})
export class TemplateControlFlowComponent {
  public isTrue = false;

  public itens: Array<{ name: string }> = [
    { name: 'Dener Troquatte' },
    { name: 'Maria' },
  ];


  public switchCondition = 'B';

  public  loadingData: Observable<string[]> = of([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]).pipe(delay(3000));

  public trackByFn(index: number): number {
    return index;
  }

  public addNewName(value: string) {
    return this.itens.push({ name: value });
  }
}
