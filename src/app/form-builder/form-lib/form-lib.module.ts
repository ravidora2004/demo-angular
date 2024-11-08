import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrInputComponent } from './fr-input/fr-input.component';
import { FrDynamicFormComponent } from './fr-dynamic-form/fr-dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FrInputComponent,
    FrDynamicFormComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    HttpClientModule,
  ],
  exports: [
    FrInputComponent,
    FrDynamicFormComponent
  ]

})
export class FormLibModule { }
