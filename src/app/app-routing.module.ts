import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path:'', component:StartComponent},
  {path:'start', component:StartComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
