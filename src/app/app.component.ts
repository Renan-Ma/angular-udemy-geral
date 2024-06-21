import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponent } from './components/signals/signals.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ContentComponent } from './components/content/content.component';
import { HostElementsComponent } from './components/host-elements/host-elements.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { ConsumeServiceComponent } from './components/consume-service/consume-service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NewComponentComponent,
    TemplateVariablesComponent,
    TemplateControlFlowComponent,
    TemplateDeferrableViewsComponent,
    SignalsComponent,
    PaiOuMaeComponent,
    AngularPipesComponent,
    ReactiveFormsComponent,
    ContentComponent,
    HostElementsComponent,
    LifeCycleComponent,
    ConsumeServiceComponent
  ],
  template: `
    <router-outlet />
    <!-- <h1>Curso angular</h1>
    <app-new-component />
    <h2>divisão 1</h2>
    <app-template-variables />
    <h2>divisão 2 </h2>

    <h2>IF e For</h2>
    <app-template-control-flow />
    <h2>divisão 3 </h2>

    <app-template-deferrable-views />
    <app-signals /> -->

    <!-- <h3>Comunicação entre components</h3>
    <app-pai-ou-mae /> -->

    <!-- <h3>Angular pipes</h3>
    <app-angular-pipes/> -->

    <!-- <h3>Reacti Forms</h3>
    <app-reactive-forms/> -->

    <!-- <h3>ng-component</h3>
    <app-content>
      <header id="header">
        <p>Header</p>
      </header>
      <p text>Text</p>
      <p text>Text</p>
      <p text>Text</p>
      <footer class="footer">
        <p>Footer</p>
      </footer>
    </app-content> -->

    <!-- <h3>Host elements</h3>
    <app-host-elements/> -->

    <!--
    <h3>Life cycle</h3>
      *******************************************
      // Adicione esses itens dentro do app Component
      *******************************************
      public number = signal(1);
      public boolean = true;

      ngOnInit(): void {
        setInterval(() => {
          this.number.update((oldValue) => {
            return oldValue + 1;
          });
        }, 1000);
      }

      *******************************************
      // Adicione esses itens dentro do HTML
      *******************************************
      @if(boolean){
      <app-life-cycle [inputMyNumber]="number()">
        <p #text>Text</p>
      </app-life-cycle>
      }

      <button (click)="boolean = !boolean">Destroy Component</button>
    -->

    <app-consume-service />
  

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent{
 
}
