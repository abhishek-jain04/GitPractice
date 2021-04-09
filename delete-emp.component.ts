import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeInfoService } from '../../services/employee-info.service';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent implements OnInit {

  model : any = [];
  svc : EmployeeInfoService;
  empid : number;
  constructor(svc : EmployeeInfoService) {this.svc = svc;}

  ngOnInit(): void {
  }

  EmpData(DeleteForm : NgForm) : void
  {
    this.empid = DeleteForm.value.eid;
    this.svc.DeleteEmployee(this.empid).subscribe((data : boolean)=>{
      if(data == true)
      {
        alert('Record Deleted Successfully');
      }
    });
  }
}
