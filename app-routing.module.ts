import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertEmployeeComponent } from './components/insert-employee/insert-employee.component';
import { ShowEmployeeByIDComponent } from './components/show-employee-by-id/show-employee-by-id.component';
import { ShowAllEmployeesComponent } from './components/show-all-employees/show-all-employees.component';
import { SelectProjByIdComponent } from './components/select-proj-by-id/select-proj-by-id.component';
import { UpdateprojectComponent } from './components/updateproject/updateproject.component';

const routes: Routes = [
  {path : "InsertEmployee", component : InsertEmployeeComponent},
  {path : "ShowEmpById", component : ShowEmployeeByIDComponent},
  {path : "ShowAllEmployees", component : ShowAllEmployeesComponent},
  {path : "selectprojid", component : SelectProjByIdComponent},
  {path : "update", component : UpdateprojectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
