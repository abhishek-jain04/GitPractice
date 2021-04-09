import { Component, OnInit } from '@angular/core';
import { EmpInfoModule } from '../../modules/emp-info/emp-info.module';
import { EmployeeInfoService } from '../../services/employee-info.service';

@Component({
  selector: 'app-show-all-employees',
  templateUrl: './show-all-employees.component.html',
  styleUrls: ['./show-all-employees.component.css']
})
export class ShowAllEmployeesComponent implements OnInit {

  svc : EmployeeInfoService;
  emplist : EmpInfoModule[];

  constructor(svc : EmployeeInfoService) {this.svc = svc;}

  ngOnInit(): void {
    /*it will load the data on form loading*/
    this.svc.GetEmployees().subscribe((data:EmpInfoModule[])=>{
      this.emplist = data;
      console.log(this.emplist);
    });
  }
}
