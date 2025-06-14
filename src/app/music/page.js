"use client"

import YouTube from 'react-youtube';
import {useState} from "react";

const [currentVideo, setCurrentVideo] = useState(null);

const videoReady = (event) => {
  setCurrentVideo(event.target)
  event.target.playVideo();
}

const play = () => {
  if (currentVideo) {
    currentVideo.playVideo();
  }
}

const pause = () => {
  if (currentVideo) {
    currentVideo.pauseVideo();
  }
}

<YouTube
videoId="25AVgjI1JjU"
onReady={videoReady}
></YouTube>