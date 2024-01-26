import { Component, OnInit} from '@angular/core';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})

export class LandingpageComponent implements OnInit{

  //injecting the popup service
  constructor(private popup : PopupService){}

  public isFeedBackVisible! : Boolean;

  private timeId : any;

  //closes the popup
  public closePopUP() : void {

    clearTimeout(this.timeId); // Clear the scheduled timeout
    this.isFeedBackVisible = false;
    this.popup.setFeedBackVisibility(this.isFeedBackVisible);

  }

  ngOnInit(): void {

    this.isFeedBackVisible = this.popup.getFeedBackVisibility();
    if(this.isFeedBackVisible === true){
      
      this.popUp();

    }
  }

  async popUp() : Promise<void> {
    
      await new Promise<void>(resolve => {

        // Set a timeout to hide the element after 2.5 secs
        this.timeId = setTimeout(() => {
          this.isFeedBackVisible = false;
          resolve();
        }, 2.5 * 1000);
      });

      this.popup.setFeedBackVisibility(this.isFeedBackVisible);

  }
  
}
