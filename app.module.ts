import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowAllEmployeesComponent } from './components/show-all-employees/show-all-employees.component';
import { InsertEmployeeComponent } from './components/insert-employee/insert-employee.component';
import { ShowEmployeeByIDComponent } from './components/show-employee-by-id/show-employee-by-id.component';
import { LoginComponent } from './components/login/login.component';
import { DeleteEmpComponent } from './components/delete-emp/delete-emp.component';
import { SelectProjByIdComponent } from './components/select-proj-by-id/select-proj-by-id.component';
import { UpdateprojectComponent } from './components/updateproject/updateproject.component';
import { UpdateemployeeComponent } from './components/updateemployee/updateemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowAllEmployeesComponent,
    InsertEmployeeComponent,
    ShowEmployeeByIDComponent,
    LoginComponent,
    DeleteEmpComponent,
    SelectProjByIdComponent,
    UpdateprojectComponent,
    UpdateemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
