import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";
/*import { FooterComponent } from "./components/footer/footer.component";
import { ContactContainerComponent } from "./components/contact-container/contact-container.component";*/

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
