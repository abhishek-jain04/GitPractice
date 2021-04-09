import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup } from '@angular/forms';
import { EmpInfoModule } from '../../modules/emp-info/emp-info.module';
import { EmployeeInfoService } from '../../services/employee-info.service';

@Component({
  selector: 'app-show-employee-by-id',
  templateUrl: './show-employee-by-id.component.html',
  styleUrls: ['./show-employee-by-id.component.css']
})
export class ShowEmployeeByIDComponent implements OnInit {

  emp : any = [];
  svc : EmployeeInfoService;
  e = new EmpInfoModule();

  constructor(svc : EmployeeInfoService) {this.svc = svc;}

  employeeid : number;
  employeename : string;
  department : string;
  designation : string;
  salary : number;
  projectid : number;

  ngOnInit(): void {
  }

  FindEmployee(getemployee : NgForm) : void
  {
    console.log(getemployee.value);
    this.e.EmpID = getemployee.value.empid;

    this.svc.GetEmployeeById(this.e.EmpID).subscribe((data : EmpInfoModule)=>{
      this.employeeid = data.EmpID;
      this.employeename = data.EmpName;
      this.department = data.Dept;
      this.designation = data.Desg;
      this.salary = data.Salary;
      this.projectid = data.ProjID;
      console.log(data.EmpID + "," + data.EmpName + "," + data.Dept + "," + data.Desg + "," + data.Salary + "," + data.ProjID);
    });
  }
}
