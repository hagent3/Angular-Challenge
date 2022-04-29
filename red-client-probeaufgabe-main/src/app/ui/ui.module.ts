import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { LayoutModule as CdkLayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { UnicornTableComponent } from './unicorn-table/unicorn-table.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { DialogDetailRowComponent } from './dialog-detail-row/dialog-detail-row.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FhirInfoComponent } from './fhir-info/fhir-info.component';
import { PatientsComponent } from './fhir-info/components/patients/patients.component';
import { PractitionFormComponent } from './fhir-info/components/practition-form/practition-form.component';
import {MatTabsModule} from "@angular/material/tabs";

const MODULES = [
  RouterModule,
  CommonModule,
  ReactiveFormsModule,
  CdkLayoutModule,
];

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatSelectModule,
  MatDialogModule,
  MatRippleModule,
  MatTabsModule
];

const COMPONENTS = [
  SidenavComponent,
  NavListComponent,
  ToolbarComponent,
  GridContainerComponent,
  UnicornTableComponent,
  DialogDetailRowComponent,
  SearchFormComponent,
  FhirInfoComponent,
  PatientsComponent,
  PractitionFormComponent
]

@NgModule({
    imports: [...MODULES, ...MATERIAL_MODULES ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    // Components
    ...COMPONENTS,
    // Modules
    ...MODULES
  ],
})
export class UiModule {}