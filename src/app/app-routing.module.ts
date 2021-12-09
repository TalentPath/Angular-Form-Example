import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path:'binding', component:BindingComponent},
  {path:'forms', component:FormsComponent},
  {path:'', redirectTo:'/binding', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
