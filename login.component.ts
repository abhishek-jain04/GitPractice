import { Component, OnInit } from '@angular/core';
import { EmpInfoModule } from '../../modules/emp-info/emp-info.module';
import { EmployeeInfoService } from '../../services/employee-info.service';
import { FormsModule, NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  svc : EmployeeInfoService;
  name : string;
  pwd : string;
  model : any = [];

  constructor(svc : EmployeeInfoService) {this.svc = svc;}

  ngOnInit(): void {
  }

  Login(LoginForm : NgForm) : void
  {
    this.name = LoginForm.value.name;
    this.pwd = LoginForm.value.pwd;

    this.svc.Login(this.name, this.pwd).subscribe((data : string)=>{
      console.log(data);
      if(data == "Login Successful")
      {
        alert('Login Successful');
      }
      else
      {
        alert("Invalid Credentials");
      }
    });
  }

}
