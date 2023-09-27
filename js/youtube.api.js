'use strict'

// Cargar la API de YouTube
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let videoIndex; // Variable para almacenar el objeto del reproductor de YouTube
let videoNosotros;
let videoGaleria1;
let videoGaleria2;
let videoGaleria3;
let videoGaleria4;
let videoGaleria5;
let videoGaleria6;

// Función llamada cuando se carga la API de YouTube
function onYouTubeIframeAPIReady() {
  videoIndex = new YT.Player('player-index', {
    videoId: 'M4S7SNEV_XM',
    playerVars: {
      autoplay: 0,
      hd: 1,
      controls: 1, // Controles
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      enablejsapi: 1 // Habilitar la API de JavaScript
    },
    events: {
      onReady: onPlayerReady
    }
  });

  videoNosotros = new YT.Player('player-nosotros', {
    videoId: 'kTOGVFPQ4s8',
    playerVars: {
      autoplay: 0,
      hd: 1,
      controls: 1, // Controles
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      enablejsapi: 1 // Habilitar la API de JavaScript
    },
    events: {
      onReady: onPlayerReady
    }
  });

  videoGaleria1 = new YT.Player('player-galeria1', {
    videoId: 'Jvf-9nEyBDA',
    playerVars: {
      autoplay: 0,
      hd: 1,
      controls: 1, // Controles
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      enablejsapi: 1 // Habilitar la API de JavaScript
    },
    events: {
      onReady: onPlayerReady
    }
  });
  videoGaleria2 = new YT.Player('player-galeria2', {
    videoId: 'RwNL7BjPWyM',
    playerVars: {
      autoplay: 0,
      hd: 1,
      controls: 1, // Controles
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      enablejsapi: 1 // Habilitar la API de JavaScript
    },
    events: {
      onReady: onPlayerReady
    }
  });
  videoGaleria3 = new YT.Player('player-galeria3', {
    videoId: 'kLQK4yNjfg8',
    playerVars: {
      autoplay: 0,
      hd: 1,
      controls: 1, // Controles
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      enablejsapi: 1 // Habilitar la API de JavaScript
    },
    events: {
      onReady: onPlayerReady
    }
  });
  videoGaleria4 = new YT.Player('player-galeria4', {
    videoId: 'OkdzV10KPIY',
    playerVars: {
      autoplay: 0,
      hd: 1,
      controls: 1, // Controles
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      enablejsapi: 1 // Habilitar la API de JavaScript
    },
    events: {
      onReady: onPlayerReady
    }
  });
  videoGaleria5 = new YT.Player('player-galeria5', {
    videoId: '3m1Runnc9X4',
    playerVars: {
      autoplay: 0,
      hd: 1,
      controls: 1, // Controles
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      enablejsapi: 1 // Habilitar la API de JavaScript
    },
    events: {
      onReady: onPlayerReady
    }
  });
  videoGaleria6 = new YT.Player('player-galeria6', {
    videoId: 'ZIQsbkc7j4o',
    playerVars: {
      autoplay: 0,
      hd: 1,
      controls: 1, // Controles
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      enablejsapi: 1 // Habilitar la API de JavaScript
    },
    events: {
      onReady: onPlayerReady
    }
  });
}

// Función llamada cuando el reproductor está listo
function onPlayerReady(event) {
  // Establecer el volumen al 50%
  player.setVolume(50);
}


