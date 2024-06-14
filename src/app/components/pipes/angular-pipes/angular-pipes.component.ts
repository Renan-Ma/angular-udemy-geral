import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe, registerLocaleData } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CustomStringPipe } from '../../../pipes/custom-string.pipe';


@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, DecimalPipe, PercentPipe, CustomStringPipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss'
})
export class AngularPipesComponent {
  public date = signal(new Date());
  today = new Date()
}
