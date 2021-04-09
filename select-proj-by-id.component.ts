import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProjInfoModule } from '../../modules/proj-info/proj-info.module';
import { ProjectInfoService } from '../../services/project-info.service';

@Component({
  selector: 'app-select-proj-by-id',
  templateUrl: './select-proj-by-id.component.html',
  styleUrls: ['./select-proj-by-id.component.css']
})
export class SelectProjByIdComponent implements OnInit {

  model : any = [];
  svc : ProjectInfoService;
  proj = new ProjInfoModule();
  ngzone : NgZone;
  router : Router;
  
  constructor(svc : ProjectInfoService, ngzone : NgZone, router : Router) {
    this.svc = svc;
    this.ngzone = ngzone;
    this.router = router;
  }

  ProjectId : number;

  ngOnInit(): void {
  }

  SelectProject(getproject : NgForm) : void
  {
    console.log(getproject.value);
    
    this.ProjectId = getproject.value.pid;

    this.svc.GetProjById(this.ProjectId).subscribe((data:ProjInfoModule)=>{
      this.proj = data;

      if(this.proj == null)
      {
        alert("Invalid project ID");
      }
      console.log(data.ProjID + "," + data.ProjName + "," + data.domain);
      alert(this.proj.ProjID + "," + this.proj.ProjName + "," + this.proj.domain);

      //how to carry data across multiple angular components
      localStorage.setItem("PID", this.proj.ProjID.toString());
      localStorage.setItem("PNAME", this.proj.ProjName);
      localStorage.setItem("DOMAIN", this.proj.domain);

      //redirect
      this.ngzone.run(()=>this.router.navigateByUrl('/update'));
    });
  }

}
