import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomedirecterComponent } from './homedirecter/homedirecter.component';

const routes: Routes = [
  { path : 'landingpage', component : LandingpageComponent},
  { path : 'homedirecter', component : HomedirecterComponent},
  { path: '', redirectTo: '/landingpage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
