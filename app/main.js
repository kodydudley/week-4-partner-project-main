import SongsController from "./Controllers/SongsController.js";
import MySongController from "./Controllers/MySongController.js";


class App {
  songsController = new SongsController();

  mySongController = new MySongController();
}

window["app"] = new App();