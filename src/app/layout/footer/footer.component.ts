import { Component, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';
import { UserService } from 'src/app/services/user.service';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() users:IUser[] = [] ;
  @Input() loggedIn:boolean = false;
  @Input() showEdit: boolean = false;
  userCurrent: number = 0;
  @Output() OnChangeFromFooter: EventEmitter<IUser> = new EventEmitter();



  
  constructor( private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((userCallBack) =>(
      this.users=userCallBack
    ));
  }

  ngAfterViewInit(): void {
    this.refreshPersona();
  }


  refreshPersona(){
    this.userCurrent = this.users.findIndex(object => {
      return object.nombre === "Aberturas";
      });
      console.log( "Usuario : "+ this.users[this.userCurrent].mail)
  }

  emitUserChangeEvent(): void {
    this.OnChangeFromFooter.emit(this.users[this.userCurrent])
  }
}
