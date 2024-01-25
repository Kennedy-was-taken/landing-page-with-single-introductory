import { Component, OnInit} from '@angular/core';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})

export class LandingpageComponent implements OnInit{

  constructor(private popup : PopupService){}

  public isFeedBackVisible? : Boolean;

  private timeId : any;

  //closes the popup
  public closePopUP() : void {

    clearTimeout(this.timeId); // Clear the scheduled timeout
    this.isFeedBackVisible = false;

  }

  ngOnInit(): void {

    this.isFeedBackVisible = this.popup.getFeedBackVisibility();

    if(this.isFeedBackVisible === true){
      
      // Set a timeout to hide the element after 10 secs
      this.timeId = setTimeout(() => {
          this.isFeedBackVisible = false;
        }, 10 * 1000);

      this.popup.setFeedBackVisibility(this.isFeedBackVisible);

    }
  }
  
}
