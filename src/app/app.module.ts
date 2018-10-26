import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { ObservableComponent } from './components/observable/observable.component';
import { ComponentsInteractionComponent } from './components/components-interaction/components-interaction.component';
import { EntryComponentComponent } from './components/entry-component/entry-component.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { OnChangeComponent } from './components/life-cycle-hooks/on-change/on-change.component';
import { RoutingComponent } from './components/routing/routing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterParameterComponent } from './components/router-parameter/router-parameter.component';
import { SubjectsComponent } from './components/observable/subjects/subjects.component';

import { CanDeActivateService } from './services/can-de-activate.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HighlightDirective } from './directives/highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { BetterBetterHighlightDirective } from './directives/better-better-highlight.directive';
import { BetterBetterBetterHighlightDirective } from './directives/better-better-better-highlight.directive';
import { NgIfNotDirective } from './directives/ng-if-not.directive';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHooksComponent,
    ObservableComponent,
    ComponentsInteractionComponent,
    EntryComponentComponent,
    ReactiveFormsComponent,
    DashboardComponent,
    OnChangeComponent,
    RoutingComponent,
    PageNotFoundComponent,
    RouterParameterComponent,
    SubjectsComponent,
    HighlightDirective,
    BetterHighlightDirective,
    BetterBetterHighlightDirective,
    BetterBetterBetterHighlightDirective,
    NgIfNotDirective
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CanDeActivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
