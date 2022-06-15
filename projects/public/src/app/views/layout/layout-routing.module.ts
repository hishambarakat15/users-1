import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/services/guard/auth-guard.service';
// import { DynamicFormComponent } from '../reusable/dynamic-form/dynamic-form.component';
// import { WizardComponent } from '../reusable/wizard/wizard.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{
  path: '', component: LayoutComponent, canActivate: [AuthGuard], children: [
    { path: 'users-approval', loadChildren: () => import('./users-approval/users-approval.module').then(m => m.UsersApprovalModule) },

    // { path: 'question-bank', component: QuestionBankComponent },
    // { path: 'wizard', component: WizardComponent },
    // { path: 'dynamic-form', component: DynamicFormComponent },
    
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
