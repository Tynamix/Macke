import {
  Storage, SqlStorage
}
from 'ionic/ionic';

import {
  Injectable
}
from 'angular2/core';

import {
  Player
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

    this.storage.query("insert into players(id, name) values ('" + player.getId() + "', '" + player.getName() + "')").then((data) => {
                console.log(JSON.stringify(data.res));
            }, (error) => {
              debugger;
                console.log("ERROR -> " + JSON.stringify(error.err));
            });
  }

  getAllPlayers() {
    var players = [];
    // If using the SqlStorage engine, we can perform arbitrary SQL queries
    this.storage.query('select * from players').then((data) => {
      if (data.res.rows.length>0) {
        for (var i = 0; i < data.res.rows.length; i++) {
        players.push(new Player(data.res.rows[i].id, data.res.rows[i].name));
        }
      }
    });

    return players;
  }
}
