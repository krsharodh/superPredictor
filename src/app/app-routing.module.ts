import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { PredictionsComponent } from './predictions/predictions.component';


const routes: Routes = [
  { path: 'form', component: UserFormComponent },
  { path: 'predictions', component: PredictionsComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
