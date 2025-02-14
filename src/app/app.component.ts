import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('myContainer') myContainer!: ElementRef;

  onBgColorChange(event: Event) {
    const color = (<HTMLInputElement>event.target).value;
    document.body.style.backgroundColor = color;
  }

  onTextColorChange(event: Event) {
    const color = (<HTMLInputElement>event.target).value;
    this.myContainer.nativeElement.style.color = color;
  }
}
