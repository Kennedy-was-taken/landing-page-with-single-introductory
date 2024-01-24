import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  private isFormVisible : Boolean = false;

  public formVisibility() {
      this.isFormVisible = !this.isFormVisible;
      return this.isFormVisible;
  }

  public setVisibility() : void {
    this.isFormVisible = false;
    console.log('false was set');
  }

  public visibilityOff() : Boolean{
    return this.isFormVisible;
  }
}
