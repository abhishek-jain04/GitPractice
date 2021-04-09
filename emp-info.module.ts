import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmpInfoModule {
  EmpID : number;
  EmpName : string;
  Dept : string;
  Desg : string;
  Salary : number;
  ProjID : number;
  Password : string;
}
