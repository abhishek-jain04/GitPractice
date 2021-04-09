import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup } from '@angular/forms';
import { EmployeeInfoService } from '../../services/employee-info.service';
import { EmpInfoModule } from '../../modules/emp-info/emp-info.module';
import { ProjInfoModule } from '../../modules/proj-info/proj-info.module';
import { ProjectInfoService } from '../../services/project-info.service';

@Component({
  selector: 'app-insert-employee',
  templateUrl: './insert-employee.component.html',
  styleUrls: ['./insert-employee.component.css']
})
export class InsertEmployeeComponent implements OnInit {

  model : any = [];
  svc : EmployeeInfoService;
  svc1 : ProjectInfoService;
  plist : ProjInfoModule[];
  emp = new EmpInfoModule();

  constructor(svc : EmployeeInfoService, svc1 : ProjectInfoService) {
    this.svc = svc;
    this.svc1 = svc1;
  }

  ngOnInit(): void {
    this.svc1.GetProjects().subscribe((data:ProjInfoModule[])=>{
      this.plist = data;
    });
  }

  RegisterData(NewEmployee : NgForm) : void
  {
    console.log(NewEmployee.value);
    this.emp.EmpID = NewEmployee.value.eid;
    this.emp.EmpName = NewEmployee.value.ename;
    this.emp.Dept = NewEmployee.value.dept;
    this.emp.Desg = NewEmployee.value.desg;
    this.emp.Salary = NewEmployee.value.salary;
    this.emp.ProjID = NewEmployee.value.projid;
    this.emp.Password = NewEmployee.value.password;
    this.svc.InsertNewEmployee(this.emp).subscribe((data: boolean) =>{
      alert(data);
      if(data == true)
      {
        alert('New Employee Registered');
      }
    });
  }

}
