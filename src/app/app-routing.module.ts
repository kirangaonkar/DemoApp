
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ComponentsInteractionComponent } from './components/components-interaction/components-interaction.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './components/observable/observable.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterParameterComponent } from './components/router-parameter/router-parameter.component';
import { AuthService } from './services/auth.service';
import { CanDeActivateService } from './services/can-de-activate.service';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivateChild: [AuthService],
        canDeactivate: [CanDeActivateService],
        children: [
            {
                path: 'form',
                component: ReactiveFormsComponent
            },
            {
                path: 'compinteraction',
                component: ComponentsInteractionComponent
            },
            {
                path: ':number',
                component: RouterParameterComponent
            },
            {
                path: 'observables',
                component: ObservableComponent
            },
            {
                path: 'lifecyclehooks',
                component: LifeCycleHooksComponent
            },
            {
                path: 'entrycomponents',
                component: ComponentsInteractionComponent
            }
        ]
    }
    , {
        path: 'form',
        component: ReactiveFormsComponent,
        canActivate: [AuthService]
    },
    {
        path: 'compinteraction',
        component: ComponentsInteractionComponent
    },
    {
        path: 'observables',
        component: ObservableComponent
    },
    {
        path: 'lifecyclehooks',
        component: LifeCycleHooksComponent
    },
    {
        path: 'entrycomponents',
        component: ComponentsInteractionComponent
    },
    {
        path: 'notfound',
        component: PageNotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/notfound'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, ReactiveFormsComponent, ComponentsInteractionComponent];
