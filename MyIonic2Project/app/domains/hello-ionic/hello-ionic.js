import {
  Page, NavController
}
from 'ionic/ionic';

@
Page({
  templateUrl: 'build/domains/hello-ionic/hello-ionic.html'
})

export class HelloIonicPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}