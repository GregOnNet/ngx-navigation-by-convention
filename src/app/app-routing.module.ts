import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './root/home/home.component';
import { ContactComponent } from './root/contact/contact.component';
import { AboutComponent } from './root/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      navigation: {
        label: 'Home'
      }
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      navigation: {
        label: 'Contact'
      }
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      navigation: {
        label: 'About'
      }
    }
  },
  {
    path: 'market',
    loadChildren: './market/market.module#MarketModule',
    data: {
      navigation: {
        label: 'Marketplace'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
