import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ALL_ROUTES } from './core/routes/all-routes.routes';
import { BLANK_ROUTES } from './core/routes/blank-routes.routes';
import { ProjectLayoutComponent } from './core/layouts/project-layout/project-layout.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';


const routes: Routes = [
  {
    path: 'RefreshComponent',
    redirectTo: "",
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'savean/home',
    pathMatch: 'full'
  },
  {
    path: 'savean',
    component: BlankLayoutComponent,
    children: BLANK_ROUTES
  },
  {
    path: 'savean/home',
    component: ProjectLayoutComponent,
    children: ALL_ROUTES
  },
  {
    path: 'RefreshComponent',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'savean/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
