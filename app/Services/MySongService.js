import {
  ProxyState
} from "../AppState.js";
import Song from "../Models/Song.js";
import {
  sandBoxApi
} from "./AxiosService.js";

class MySongService {
  addActive(data) {
    ProxyState.activeSong = ProxyState.songs.find(s => s._id == data)
    console.log(ProxyState.activeSong);

  }

  constructor() {
    this.getMySongs()
    console.log("MySongService");
  }

  /**
   * Retrieves the saved list of songs from the sandbox
   */
  async getMySongs() {
    let res = await sandBoxApi.get("")
    //TODO What are you going to do with this result
    let results = res.data.data.map(rawData => new Song(rawData));
    ProxyState.playlist = results
  }

  /**
   * Takes in a song id and sends it from the search results to the sandbox to be saved.
   * Afterwords it will update the store to reflect saved info
   * @param {string} id
   */
  async addSong(id) {
    let res = await sandBoxApi.post("", ProxyState.activeSong)
    ProxyState.playlist = [...ProxyState.playlist, ProxyState.activeSong]
    // ProxyState.activeSong = ProxyState.songs.find(s => s._id == data)
    // console.log(ProxyState.activeSong);
    //TODO you only have an id, you will need to find it in the store before you can post it
    //TODO After posting it what should you do?
  }

  /**
   * Sends a delete request to the sandbox to remove a song from the playlist
   * Afterwords it will update the store to reflect saved info
   * @param {string} id
   */
  async removeSong(id) {
    //TODO Send the id to be deleted from the server then update the store
    let res = await sandBoxApi.delete("/" + id)
    this.getMySongs()
  }
}

const mySongService = new MySongService();
export default mySongService;