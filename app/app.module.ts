import { CheckBoxModule ,ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
@NgModule({ declarations: [ AppComponent ], imports: [ RadioButtonModule, CheckBoxModule, BrowserModule, ButtonModule, DialogModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
