import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpInfoModule } from '../../modules/emp-info/emp-info.module';
import { EmployeeInfoService } from '../../services/employee-info.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  model : any = [];
  svc : EmployeeInfoService;
  emp = new EmpInfoModule();
  empid : number;
  empname : string;
  edept : string;
  edesg : string;
  esal : number;
  eprojid : number;
  epass : string;

  constructor(svc : EmployeeInfoService) {
    this.svc = svc;
  }

  ngOnInit(): void {
  }

  Update(updateemployee : NgForm) : void
  {
    console.log(updateemployee.value);

    this.emp.EmpID = updateemployee.value.eid;
    this.emp.EmpName = updateemployee.value.ename;
    this.emp.Dept = updateemployee.value.dept;
    this.emp.Desg = updateemployee.value.desg;
    this.emp.Salary = updateemployee.value.salary;
    this.emp.ProjID = updateemployee.value.projid;
    this.emp.Password = updateemployee.value.password;

    this.svc.UpdateEmployee(this.emp.EmpID, this.emp).subscribe((data:boolean)=>{
      if(data==true)
      {
        alert("Update Successfull");
      }
      else
      {
        alert("Update Unsuccessfull");
      }
    });
  }

}
