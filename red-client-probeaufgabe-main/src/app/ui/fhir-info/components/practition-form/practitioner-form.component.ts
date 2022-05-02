import { Component, OnInit } from '@angular/core';
import { IFhirPractitioner } from "@red-probeaufgabe/types";
import { Subscription } from "rxjs";
import { PractitionerSearchService } from "../../../../search/services/practitioner-search.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-practitioner-form',
  templateUrl: './practitioner-form.component.html',
  styleUrls: ['./practitioner-form.component.scss']
})
export class PractitionerFormComponent implements OnInit {
  practitioner:  IFhirPractitioner;
  loading = true;
  onPractitionerSubscription: Subscription;
  constructor(private readonly practitionerSearchService: PractitionerSearchService,
              private readonly activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.onPractitionerId();
  }

  onPractitionerId() {
    this.onPractitionerSubscription = this.activatedRouter.params.subscribe(async (params) => {
      const id = params['id'];
      this.practitioner = await this.practitionerSearchService.findById(id).toPromise()
    });
  }
}
