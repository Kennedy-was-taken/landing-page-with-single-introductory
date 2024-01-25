import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup.service';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrl: './registerform.component.css'
})

export class RegisterformComponent implements OnInit {

    userForm!: FormGroup;

    constructor(private fb: FormBuilder, private library : FaIconLibrary, private popup : PopupService, private router : Router){ 
      library.addIcons(faAnglesLeft, faXmark);
    }

    //user object
    user ={
      username :  "",
      password :  ''
    }

    ngOnInit(): void {
      this.userForm = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });
    }

    //turns of the popup
    public goBack() {
      this.popup.setFormVisibility(false);
      this.router.navigate(['/homedirecter']); 
    }

    //turns of the popup and sets the feedback to true
    public onSubmit() : void {
      if(this.userForm.valid){
        const formData = this.userForm.value;
        console.log(JSON.stringify(formData, undefined, 2));
        this.popup.setFormVisibility(false);
        this.popup.setFeedBackVisibility(true);
        this.router.navigate(['/homedirecter']); 
      }
      
    }
}
