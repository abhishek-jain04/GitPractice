import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjInfoModule } from '../../modules/proj-info/proj-info.module';
import { ProjectInfoService } from '../../services/project-info.service';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.css']
})
export class UpdateprojectComponent implements OnInit {

  model : any = [];
  svc : ProjectInfoService;
  pinfo = new ProjInfoModule();
  pid : any;
  pname : string;
  domain : string;

  constructor(svc : ProjectInfoService) {
    this.svc = svc;
  }

  ngOnInit(): void {
    this.pid = localStorage.getItem("PID");
    this.pname = localStorage.getItem("PNAME");
    this.domain = localStorage.getItem("DOMAIN");

    alert(this.pid + "," + this.pname + "," + this.domain);
  }

  Update(updateproject : NgForm) : void
  {
    console.log(updateproject.value);
    this.pinfo.ProjID = updateproject.value.projid;
    this.pinfo.ProjName = updateproject.value.projname;
    this.pinfo.domain = updateproject.value.domain;

    this.svc.UpdateProject(this.pid, this.pinfo).subscribe((data:boolean)=>{
      if(data == true)
      {
        alert(this.pinfo.ProjID + "," + this.pinfo.ProjName + "," + this.pinfo.domain);
        alert("Update Successfull");
      }
      else
      {
        alert("Update Unsuccessfull");
      }
    })
  }

}
