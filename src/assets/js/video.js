(function () {
  "use strict";
  var url = window.URL || window.webkitURL;
  var playSelectedFile = function (event) {
    var file = this.files[0];
    var type = file.type;
    var name = file.name;
    var videoNode = document.querySelector("video");
    var fileNameNode = document.querySelector("#file-name");

    // var canPlay = videoNode.canPlayType(type);
    fileNameNode.innerHTML = name;

    var fileUrl = url.createObjectURL(file);
    videoNode.src = fileUrl;
  };
  var inputNode = document.querySelector("#file");
  inputNode.addEventListener("change", playSelectedFile, false);
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
