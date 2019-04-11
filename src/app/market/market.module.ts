import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { PipesComponent } from './pipes/pipes.component';
import { FlangesComponent } from './flanges/flanges.component';
import { MarketComponent } from './market.component';

@NgModule({
  declarations: [PipesComponent, FlangesComponent, MarketComponent],
  imports: [
    CommonModule,
    MarketRoutingModule
  ]
})
export class MarketModule { }
