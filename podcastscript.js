window.onSpotifyIframeApiReady = (IFrameAPI) => {
  let element = document.getElementById("embed-iframe");
  let options = {
    width: "90%",
    height: "250px",
    uri: "spotify:show:4rOoJ6Egrf8K2IrywzwOMk",
  };
  let callback = (EmbedController) => {
    document
      .querySelectorAll("ul#episodes > li > button")
      .forEach((episode) => {
        episode.addEventListener("click", () => {
          EmbedController.loadUri(episode.dataset.spotifyId);
        });
      });
  };
  IFrameAPI.createController(element, options, callback);
};
