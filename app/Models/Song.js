export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "200x200");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return /*html*/ `
    <div class="text-center">
    <img src="${this.albumArt}" alt="" srcset=""/>
    <h3>${this.title}</h3>
    <h6>${this.artist}</h6>
    <h6>${this.price}</h6>
    <button type="button" class="btn btn-primary btn-block mb-5" onclick="app.songsController.addActive('${this._id}')">Preview
    </button>
    </div>
`
  }
  get MySongTemplate() {
    return /*html*/ `
    <img src="${this.albumArt}" alt="" srcset=""/>
<h1>${this.title}</h1>
<h2>${this.artist}</h2>
<h2>${this.price}</h2>
  <button type="button" class="btn btn-danger btn-block" onclick="app.mySongController.removeSong('${this._id}')">Remove Song
</button>
`
  }

  get ActiveTemplate() {
    return /*html*/ `
  <div class="card text-center" style="">
  <img class="card-img-top" src="${this.albumArt}" alt="Card image cap">
  <div class="card-body">
  <h1 class="card-title">${this.title}</h1>
  <p class="card-text">
  <h2>${this.artist}</h2>
  <h2>${this.price}</h2>
  </p>
  <button type="button" class="btn btn-primary" onclick="app.mySongController.addSong('${this._id}')">Add to Playlist</button>
<audio id="playAudio" src="${this.preview}"></audio>
  <button type="button" onclick="app.mySongController.playAudio()" class="btn btn-primary"><i class="fas fa-play"></i></button>
  <button type="button" onclick="app.mySongController.pauseAudio()" class="btn btn-primary"><i class="fas fa-pause"></i></button>
  
  </div>
  </div>
  `;
  }


}
// /* <a id="myAudio" href="${this.preview}" class="btn btn-primary"><i class="fas fa-play"></i></a>