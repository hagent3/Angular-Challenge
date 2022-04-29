import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FhirResourceType, IFhirPatient, IFhirPractitioner } from "@red-probeaufgabe/types";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { createSearchPatternValidator } from "./validators/search.validator";

@Component({
  selector: 'app-search',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, AfterViewInit {
  searchForm: FormGroup;
  inputPlaceholder = 'Suchen..';
  searchWidth = '20rem';
  value: ''
  submitted = false;
  fhirProfile = FhirResourceType;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngAfterViewInit() {
    this.initDataSource();
  }

  submitForm() {
    this.submitted = true;

    if (this.searchForm.invalid) {
      return;
    }
  }

  initForm(): void {
    this.searchForm = this.fb.group({
      search: ['', [createSearchPatternValidator()]],
      fhir: ['',]
    })

    this.searchForm.controls['search'].valueChanges.subscribe(val => {
      console.log(val)
    })

  }

  applyFilter(filterValue: string) {
    if (filterValue) {
      console.log(filterValue);
     /* this.dataSource.filter = filterValue.trim().toLowerCase();
      console.log(this.dataSource);*/
    }
  }

  private initDataSource() {
    // this.dataSource.sort = this.sort;
  }
}
