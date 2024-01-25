import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

export class ContentComponent implements OnInit{

    constructor(private library : FaIconLibrary, private popup : PopupService) {
        library.addIcons(faFacebookF, faTwitter, faInstagram);
    }

    isFormVisible? : Boolean;

    public isformVisible() : void {
        this.isFormVisible = this.popup.formVisibility();
    }

    ngOnInit(): void {
        this.isFormVisible = this.popup.getformVisibility();
        
    }

}
