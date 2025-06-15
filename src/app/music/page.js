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

            {/*
              <p className="text-sm text-gray-700 mb-1">
              <span className="font-semibold">捷運站：</span>{selectedCafe.station}
            </p>
            <p className="text-sm text-amber-600 font-semibold">
              評價：{selectedCafe.rating} ⭐
            </p>
            */}