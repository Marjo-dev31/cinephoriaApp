import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonFooter, IonList, IonItem, IonInput,IonImg, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonTitle, IonInput, IonItem, IonList, IonFooter, IonHeader, IonToolbar, IonContent],
})
export class HomePage {
  constructor() {}
}
