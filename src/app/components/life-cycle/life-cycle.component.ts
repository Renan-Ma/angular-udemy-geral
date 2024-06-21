import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifeCycleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  public myNumber = signal(0)
  @Input() set  inputMyNumber(value: number){
    this.myNumber.set(value)
  }
  public myText = signal('Renan');

  @ViewChild('content') public content!: ElementRef;
  @ContentChild('text') public text!: ElementRef;

  //modo antigo
  // private _destroy$ = timer(0, 1000).subscribe({
  //   next: (next) => console.log('next', next),
  //   error: (error) => console.log('error', error),
  //   complete: () => console.log('Complete!'),
  // });

  //modo novo
  private _destroy$ = timer(0, 1000)
    .pipe(takeUntilDestroyed())
    .subscribe({
      next: (next) => console.log('next', next),
      error: (error) => console.log('error', error),
      complete: () => console.log('Complete!'),
    });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOninit');
  }

  ngDoCheck(): void {
    console.log('doCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log(this.text.nativeElement.innerText);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.content.nativeElement.innerText);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // this._destroy$.unsubscribe();
  }
}
