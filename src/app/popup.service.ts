import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  private isFormVisible : Boolean = false;
  private isFeedBackVisible : Boolean = false;

  //form visibility
  public formVisibility() {
      this.isFormVisible = !this.isFormVisible;
      return this.getformVisibility();
  }

  //sets form visibility
  public setFormVisibility(value : Boolean) : void {
    this.isFormVisible = value;
  }

  //gets form visibility
  public getformVisibility() : Boolean{
    return this.isFormVisible;
  }

  //sets feedback visibility
  public setFeedBackVisibility(value : Boolean) : void{
    this.isFeedBackVisible = value;
  }

  //gets feedback visibility
  public getFeedBackVisibility() : Boolean{
    return this.isFeedBackVisible;
  }
}
