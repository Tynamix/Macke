import {
  Storage, SqlStorage
}
from 'ionic/ionic';

import {
  Injectable
}
from 'angular2/core';

import {
  Person
}
from '../models/player';


@
Injectable()

export class PlayerData {

  constructor() {
    this.storage = new Storage(SqlStorage, {
      name: 'mackeData'
    });
  }

  addPlayer(player: Player) {

    this.storage.query('insert into players(id, name) values (' + player.getId() + ', ' + player.getName() + ')')

  }

  getAllPlayers() {
    var players = [];
    debugger;
    // If using the SqlStorage engine, we can perform arbitrary SQL queries
    this.storage.query('select * from players').then((data) => {
      debugger;
      players.push(new Player(data.id, data.name));
    });

    return players;
  }
}