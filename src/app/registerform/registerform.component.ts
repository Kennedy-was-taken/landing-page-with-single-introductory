import { Component } from '@angular/core';
import { PopupService } from '../popup.service';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrl: './registerform.component.css'
})

export class RegisterformComponent {

    constructor(private library : FaIconLibrary, private popup : PopupService, private router : Router){ 
      library.addIcons(faAnglesLeft, faXmark);
    }
    
    //user object
    user ={
      username : String,
      password : String
    }

    public goBack() {
      this.popup.setVisibility();
      this.router.navigate(['/homedirecter']); 
    }

    public onSubmit() : void {
      console.log(JSON.stringify(this.user, undefined, 2));
      this.popup.setVisibility();
      // this.snackbar.open('Data has been successfully captured!', 'Close', {
      //   duration: 3000});
      this.router.navigate(['/homedirecter']); 
    }
}
