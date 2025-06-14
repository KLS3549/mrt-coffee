"use client"

import Image from "next/image";
import { useRef, useState } from "react";
import Map, { Marker, useMap } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const cafeList = [
  {
    longitude: 121.5703915604077,
    latitude: 25.02749350333757,
    name: "象山日光咖啡 Sunshine Cafe",
    station: "象山站",
    rating: 4.6,
  },
  {
    longitude: 121.55603157273467,
    latitude: 25.02859970174685,
    name: "光孚咖啡",
    station: "台北101/世貿站",
    rating: 4.5,
  },
  {
    longitude: 121.56171375369756,
    latitude: 25.028755819528218,
    name: "呷滴 Jia Dee",
    station: "中山站",
    rating: 4.2,
  },
  {
    longitude: 121.54483579626317,
    latitude: 25.032084655376718,
    name: "這間咖啡",
    station: "大安站",
    rating: 4.2,
  },
  {
    longitude: 121.53835931521866,
    latitude: 25.03104241881393,
    name: "2J CAFE",
    station: "大安森林公園站",
    rating: 4.3,
  },
  {
    longitude: 121.52996653216603,
    latitude: 25.030838439282387,
    name: "羊毛與花．永康",
    station: "東門站",
    rating: 4.4,
  },
  {
    longitude: 121.51660746666033,
    latitude: 25.03191223611397,
    name: "白胖咖啡館",
    station: "中正紀念堂站",
    rating: 4.9,
  }
  
];

export default function greenCafe() {

  const mapRef = useRef(null); // ✅ 使用 ref 存地圖

  const onClick = () => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [121.5241280211413, 25.04428842263054],
        zoom: 17,
      });
    } else {
      console.log("map is undefined");
    }
  };

  return (
    <>
      <button onClick={onClick}>Go</button>

      <div className="relative flex flex-col items-center gap-10 min-h-screen overflow-hidden">

        <Map
          mapboxAccessToken="pk.eyJ1Ijoiamllbmh1YWdvbyIsImEiOiJjbTdsNjY0MjMwNDl2MmtzZHloYXY0czNkIn0.mlD3UGH3wR3ZMJmCuHDpSQ"
          initialViewState={{
            longitude: 121.52817156559162,
            latitude: 25.043949558152605,
            zoom: 17
          }}
          id="myMap"
          //加入 marker
          style={{width: "100vw", height: "100vh"}}
          mapStyle="mapbox://styles/mapbox/light-v11"
          onLoad={(event) => {
            // ✅ 取得地圖實例
            mapRef.current = event.target;
          }}
        >
          {
            cafeList.map((shop) => (
              <Marker
                longitude={shop.longitude}
                latitude={shop.latitude}
                key={shop.name}
                onClick={() => {
                  if (mapRef.current) {
                    mapRef.current.flyTo({
                      center: [shop.longitude, shop.latitude],
                      zoom: 17,
                    });
                  }
                }}
              >
                <div className='w-10 h-10 bg-blue-200 rounded-full'></div>
              </Marker>
            ))
          }
        </Map>

        <div className="absolute top-20 right-10 w-[500px] max-w-md h-[500px] overflow-y-auto 
        overflow-x-hidden space-y-4 z-10 ">
          {cafeList.map((cafe, index) => (
          <div
            key={index}
            onClick={() => {
              if (mapRef.current) {
                mapRef.current.flyTo({
                  center: [cafe.longitude, cafe.latitude],
                  zoom: 17,
                });
              }
            }}
            className="bg-[#E6D1B1]/60 rounded-lg shadow p-4 flex flex-col gap-2 transition hover:scale-[1.01]"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-bold">{cafe.name}</h2>
              <div className="flex items-center text-amber-500 font-semibold">
                {cafe.rating}
                <span className="ml-1">⭐</span>
              </div>
            </div>
            <p className="text-sm text-gray-700">{cafe.station}</p>
          </div>
          ))}
        </div>
      </div>

    </>

  );
}
