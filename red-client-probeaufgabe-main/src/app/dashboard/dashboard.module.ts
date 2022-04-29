import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AbstractSearchFacadeService, SearchFacadeService, SearchModule } from '@red-probeaufgabe/search';
import { UiModule } from '@red-probeaufgabe/ui';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, UiModule, SearchModule, DashboardRoutingModule],
  exports: [DashboardComponent],

  // It was no providers on this place, therefore show the R3NullInjector error
  providers: [
    {
      provide: AbstractSearchFacadeService,
      useClass: SearchFacadeService
    }
  ]
})
export class DashboardModule {}
