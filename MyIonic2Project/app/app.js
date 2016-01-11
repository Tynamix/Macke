import {
  App, IonicApp, Platform, Storage, SqlStorage
}
from 'ionic/ionic';

import {
  HelloIonicPage
}
from './domains/hello-ionic/hello-ionic';
import {
  ListPage
}
from './domains/list/list';

import {
  PlayerList
}
from './domains/player-list/player-list';

import {
  PlayerData
}
from './domains/data/playerdata'

@
App({
  templateUrl: 'build/app.html',
  providers: [PlayerData]
})


class MyApp {
  constructor(app: IonicApp, platform: Platform) {

    // set up our app
    this.app = app;
    this.platform = platform;
    this.initializeApp();

    // set our app's pages
    this.pages = [{
      title: 'Hello Ionic',
      component: HelloIonicPage
    }, {
      title: 'My First List',
      component: ListPage
    }, {
      title: 'Mitspieler',
      component: PlayerList
    }];

    // make HelloIonicPage the root (or first) page
    this.rootPage = HelloIonicPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');

      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      //
      // For example, we might change the StatusBar color. This one below is
      // good for light backgrounds and dark text;
      if (typeof StatusBar !== 'undefined') {
        StatusBar.styleDefault();
      }

      this.storage = new Storage(SqlStorage,{ name: 'mackeData'});
            this.storage.query('CREATE TABLE IF NOT EXISTS players (id TEXT PRIMARY KEY, name TEXT)').then((data) => {
                console.log("TABLE CREATED -> " + JSON.stringify(data.res));
            }, (error) => {
                console.log("ERROR -> " + JSON.stringify(error.err));
            });
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.app.getComponent('leftMenu').close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
