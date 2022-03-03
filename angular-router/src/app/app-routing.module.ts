import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PagenotfoundcompantComponent } from './pagenotfoundcompant/pagenotfoundcompant.component';
import{CartComponent} from './cart/cart.component'

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'contactus',component:ContactUSComponent},
  {path:'cart',component:CartComponent},
  {path:'**',component:PagenotfoundcompantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
