import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { FlangesComponent } from './flanges/flanges.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pipes'
  },
  {
    path: 'pipes',
    component: PipesComponent,
    data: {
      navigation: { label: 'Pipes' }
    }
  },
  {
    path: 'flanges',
    component: FlangesComponent,
    data: {
      navigation: { label: 'Flanges' }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule {}
