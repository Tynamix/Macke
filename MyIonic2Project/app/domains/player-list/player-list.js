import {
  IonicApp,
  Page
}
from 'ionic/ionic';

import {
  Player
}
from '../models/player';

import {
  PlayerData
}
from '../data/playerdata';

import {
  ItemDetailsPage
}
from '../item-details/item-details';

@
Page({
  templateUrl: 'build/domains/player-list/player-list.html'
})

export class PlayerList {
  constructor(playerData: PlayerData) {
    this.playerData = playerData;

    this.getAllPlayers();
  }

  getAllPlayers() {
    this.players = this.playerData.getAllPlayers();
  }

  addUserToList(playerName) {
    var newPlayer = new Player(Player.createGuid(), playerName);
    this.playerData.addPlayer(newPlayer);
    this.getAllPlayers();
  }


}