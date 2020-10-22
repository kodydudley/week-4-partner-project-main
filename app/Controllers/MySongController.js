import {
  ProxyState
} from "../AppState.js";
import mySongService from "../Services/MySongService.js";

//Private
/**Draws the Search results to the page */
function _drawResults() {
  let songs = ProxyState.songs
  let template = ""
  songs.forEach(s => template += s.Template)
  document.getElementById("songs").innerHTML = template
}

function _drawActive() {
  let activeTemplate = ""
  document.getElementById("activeSong").innerHTML = ProxyState.activeSong.ActiveTemplate
}

// /**Draws the Users saved songs to the page */
function _drawPlaylist() {
  let playlist = ProxyState.playlist
  let template = ""
  playlist.forEach(p => template += p.MySongTemplate)
  document.getElementById("playlist").innerHTML = template
}

//Public
export default class MySongController {
  constructor() {
    ProxyState.on("playlist", _drawPlaylist)

    //TODO Don't forget to register your listeners and get your data
  }



  getMySongs(id) {
    try {
      mySongService.getMySongs()
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  addSong(id) {
    id.preventDefault
    mySongService.addSong(id)
  }
  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) {
    mySongService.removeSong(id)
  }

  playAudio() {
    let a = document.getElementById("playAudio")
    a.play()
  }

  pauseAudio() {
    let a = document.getElementById("playAudio")
    a.pause()
  }
}