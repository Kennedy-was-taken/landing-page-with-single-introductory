import { Component } from '@angular/core';
import { PopupService } from '../popup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrl: './registerform.component.css'
})

export class RegisterformComponent {

    constructor(private popup : PopupService, private router : Router){ }

    public goBack() {
      this.popup.setVisibility();
      this.router.navigate(['/homedirecter']); 
    }
}
