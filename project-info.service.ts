import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import { ProjInfoModule } from '../modules/proj-info/proj-info.module';
import { Observable } from 'rxjs/internal/observable';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectInfoService {

  proj : ProjInfoModule;
  http : HttpClient;
  url : string = "http://localhost:50205/api/ProjectInfo";
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };

  constructor(http : HttpClient) {this.http = http;}

  GetProjects() : Observable<ProjInfoModule[]>
  {
    return this.http.get<ProjInfoModule[]>(this.url + "/" + "GetProjects");
  }

  UpdateProject(pid : number, pinfo : ProjInfoModule) : Observable<boolean>
  {
    return this.http.put<boolean>(this.url + "/UpdateProject/" + pid, pinfo, this.httpOptions);
  }

  GetProjById(id : number) : Observable<ProjInfoModule>
  {
    return this.http.get<ProjInfoModule>(this.url + "/SelectProjById/" + id);
  }
}
