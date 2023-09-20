import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

import { MytestingComponent } from './test.component';

@NgModule({
imports : [BrowserModule, FormsModule];
declarations:[MytestingComponent],
bootstrap:    [ MytestingComponent ]

})
export class testModule{

}