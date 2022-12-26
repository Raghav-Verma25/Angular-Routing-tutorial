import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent} from './error-page/error-page.component'
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
const routes: Routes = [
  {
    path: 'about',
    component:AboutComponent,
    children:[
      {path:'company', component:AboutCompanyComponent},
      {path:'me',component:AboutMeComponent}
    ]
  },
  {
    path: 'user/:number',
    component:UserComponent,
  },
  {
    path: '',
    component:HomeComponent
  },
  {
    path: '**',
    component:ErrorPageComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
