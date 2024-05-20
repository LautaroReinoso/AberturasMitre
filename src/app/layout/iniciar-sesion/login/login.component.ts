import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  @Output() onCloseEvent:EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  };
  ngOnInit(): void {
    
  }

  get Email(){
    return this.loginForm.get('email')
  };

  get Password(){
    return this.loginForm.get('password')
  };


  login(event: Event) {
    event?.preventDefault();
    this.authService.IniciarSesion(this.loginForm.value).subscribe(data => {
      console.log("Datos de inicio de sesion:" + JSON.stringify(data));
      if (sessionStorage.getItem('currentUser') != null){
          this.onCloseEvent.emit();
        } else {
          alert(" Ha habido un error en sus credenciales, por favor vuelva a intentar");
         }
    });
  }
  onClose(){
    this.onCloseEvent.emit();
  }
}
