import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "layout"
  },
  {
    path: "landing",
    component: LandingComponent
  },
  { path: 'auth', loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule) },
  { path: 'layout', loadChildren: () => import('./views/layout/layout.module').then(m => m.LayoutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
