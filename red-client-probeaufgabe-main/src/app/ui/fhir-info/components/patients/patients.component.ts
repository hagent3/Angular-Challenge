import { Component, OnDestroy, OnInit } from '@angular/core';
import { PatientSearchService } from "../../../../search/services/patient-search.service";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { IFhirPatient } from "@red-probeaufgabe/types";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit, OnDestroy {

  loading = true;
  onPatientSubscribtion: Subscription;
  patient: IFhirPatient;
  constructor(private readonly patientSearchService: PatientSearchService,
              private readonly activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.onPatientId();
  }

  ngOnDestroy(): void {
    if (this.onPatientSubscribtion) {
      this.onPatientSubscribtion.unsubscribe();
    }
  }

  private onPatientId() {

    this.onPatientSubscribtion = this.activatedRouter.params.subscribe(async (params) => {
      const id = params['id'];
      if (id) {
        this.loading = true;
        this.patient = await this.patientSearchService.findById(id).toPromise();
      }
    })

  }
}
