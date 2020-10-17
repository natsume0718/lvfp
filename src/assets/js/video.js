(function () {
  "use strict";
  var inputNode = document.querySelector("#file");
  inputNode.addEventListener("change", setVideo, false);
  new Plyr("#video", {
    settings: ["captions", "quality", "speed", "loop"],
    speed: {
      selected: 1,
      options: [
        0.25,
        0.5,
        0.75,
        1,
        1.25,
        1.5,
        1.75,
        2,
        2.25,
        2.5,
        2.75,
        3.0,
        3.25,
        3.5,
        3.75,
        4.0,
      ],
    },
  });
})();

function setVideo(event) {
  // webkitブラウザ対応
  var url = window.URL || window.webkitURL;
  var file = this.files[0];
  var name = file.name;
  var videoNode = document.querySelector("video");
  var fileNameNode = document.querySelector("#file-name");

  fileNameNode.innerHTML = name;

  var fileUrl = url.createObjectURL(file);
  videoNode.src = fileUrl;
}
