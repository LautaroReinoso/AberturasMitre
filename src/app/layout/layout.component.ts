import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { IUser } from '../interfaces/IUser';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  users: IUser[] = [];
  userCurrent: number = 0;
  showEdit:boolean=false;
  loggedIn = false;

  
  constructor(private storageService: StorageService,private userService:UserService, private authService: AuthService) {}
  ngOnInit() {
    this.userService.getUser().subscribe((userCallBack) =>
      this.users=userCallBack);
  }
  showEditForm() {
    this.showEdit = false;
  }
  
  ngAfterViewInit(): void {
    this.refreshUser();
  } 

  refreshUser(){
    this.userCurrent = this.users.findIndex( Object => {
        return Object.id;
    })
  }

  toggleShowEdit(showEdit:boolean){
    this.showEdit=showEdit;
  }
  checkLoggedIn():boolean{
    return this.authService.isUserLoggedIn();
  }

  onChangeFromFooter(changes:IUser){
    this.users[this.userCurrent] = changes;
  }



  async editUser(userChange: IUser) {
    if (this.users[this.userCurrent].apellido.length === 0){
      alert("Por Favor complete el Apellido");
      return
    }
    if(this.users[this.userCurrent].nombre.length === 0){
      alert("Por Favor complete los Nombres");
      return
    }
    if(this.users[this.userCurrent].cel.length === 0){
      alert("Por Favor complete la Ocupación");
      return
    }
    if(this.users[this.userCurrent].mail.length === 0){
      alert("Por Favor complete la sección Acerca de mi");
      return
    }

  }


 

}