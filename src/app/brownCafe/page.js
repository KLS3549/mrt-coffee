"use client"

import Image from "next/image";
import { useRef, useState } from "react";
import Map, { Marker, useMap } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRouter } from "next/navigation";

const cafeList = [
  {
    longitude: 121.57061738716047,
    latitude: 24.991745791609198,
    name: "Ruins Coffee Roasters",
    station: "木柵站",
    rating: 4.5,
    image: "/BR/BR1.jpg"
  },
  {
    longitude: 121.55907357864518,
    latitude: 25.0187864121531,
    name: "E-FUN COFFEE 一方咖啡",
    station: "麟光站",
    rating: 4.7,
    image: "/BR/BR2.jpg"
  },
  {
    longitude: 121.55040755887308,
    latitude: 25.023063688020564,
    name: "伴鹿咖啡 DeerFriend Café",
    station: "六張犁站",
    rating: 4.8,
    image: "/BR/BR3.jpg"
  },
  {
    longitude: 121.54994564288644,
    latitude: 25.023218434479592,
    name: "休習日 Z Day Cafe",
    station: "六張犁站",
    rating: 4.7,
    image: "/BR/BR4.jpg"
  },
  {
    longitude: 121.56909439309285,
    latitude: 25.041437045967545,
    name: "A N G L E",
    station: "科技大樓站",
    rating: 4.5,
    image: "/BR/BR5.jpg"
  },
  {
    longitude: 121.54736338538761,
    latitude: 25.026477197297908,
    name: "未央咖啡店",
    station: "科技大樓站",
    rating: 4.1,
    image: "/BR/BR6.jpg"
  },
  {
    longitude: 121.54347082671303,
    latitude: 25.044463380081076,
    name: "草泥cafe",
    station: "忠孝復興站",
    rating: 4.2,
    image: "/BR/BR7.jpg"
  },
  {
    longitude: 121.54203599738834,
    latitude: 25.053887640716223,
    name: "Le Park Cafe公園咖啡館",
    station: "南京復興站",
    rating: 4.5,
    image: "/BR/BR8.jpg"
  },
  {
    longitude: 121.54251333273666,
    latitude: 25.05774125396983,
    name: "初心者咖啡店",
    station: "中山國中站",
    rating: 4.7,
    image: "/BR/BR9.jpg"
  },
  {
    longitude: 121.5465581227559,
    latitude: 25.079075978222768,
    name: "杜鵑窩 CUCKOO's NEST",
    station: "大直站",
    rating: 4.6,
    image: "/BR/BR10.jpg"
  },
  {
    longitude: 121.55277295369937,
    latitude: 25.08346892034954,
    name: "撒子甜點Isaac dessert",
    station: "劍南路站",
    rating: 4.6,
    image: "/BR/BR11.jpg"
  },
  {
    longitude: 121.5677975377538,
    latitude: 25.08128129282394,
    name: "湛盧咖啡 西湖館",
    station: "西湖站",
    rating: 4.4,
    image: "/BR/BR12.jpg"
  },
  {
    longitude: 121.57782098068454,
    latitude: 25.083104128320652,
    name: "The Antipodean Specialty Coffee",
    station: "港墘站",
    rating: 4.3,
    image: "/BR/BR13.jpg"
  },
  {
    longitude: 121.5919597261553,
    latitude: 25.086502341013887,
    name: "暖窩咖啡 內湖店",
    station: "內湖站",
    rating: 4.6,
    image: "/BR1.jpg"
  }
  
];

export default function brownCafe() {

  const [selectedCafe, setSelectedCafe] = useState(null);

  const router = useRouter();
  const handleEnded = () => {
    // 這裡放你要做的事，例如切換畫面、顯示訊息等
    router.push("/intro");
  };

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
      <div className="relative flex flex-col items-center gap-10 min-h-screen overflow-hidden">

        <button
          className="absolute top-6 left-4 z-20 bg-[#E6D1B1] hover:bg-[#E6D1B1]/60 text-black font-bold py-2 px-4 rounded shadow"
          onClick={() => {
            // 這裡可以放你要觸發的功能，例如 reset 地圖位置
            handleEnded();
          }}
        >
          HOME
        </button>

        <button
          className="absolute top-6 right-10 z-20 bg-[#E6D1B1] hover:bg-[#E6D1B1]/60 text-black font-bold py-2 px-4 rounded shadow"
          onClick={() => {
            if (mapRef.current) {
              mapRef.current.flyTo({
                center: [121.60255679602709, 25.039139279223434],
                zoom: 12,
              });
            } else {
              console.log("map is undefined");
            }
          }}
        >
          CENTER
        </button>

        <Map
          mapboxAccessToken="pk.eyJ1Ijoiamllbmh1YWdvbyIsImEiOiJjbTdsNjY0MjMwNDl2MmtzZHloYXY0czNkIn0.mlD3UGH3wR3ZMJmCuHDpSQ"
          initialViewState={{
            longitude: 121.60255679602709,
            latitude: 25.039139279223434, 
            zoom: 12
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
                className="flex flex-col items-center"
                longitude={shop.longitude}
                latitude={shop.latitude}
                key={shop.name}
                onClick={(e) => {
                  e.originalEvent.stopPropagation(); // 避免冒泡
                  setSelectedCafe(shop);
                }}
              >
                <div className="font-bold">{shop.name}</div>
                <div className='w-5 h-5 bg-blue-200 rounded-full'></div>
              </Marker>
            ))
          }
        </Map>

        {selectedCafe && (
          <div className="absolute bottom-10 left-10 z-30 bg-[#E6D1B1] rounded-lg shadow-lg w-[300px] p-4">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-bold">{selectedCafe.name}</h2>
              <button
                className="text-gray-500 hover:text-black text-xl"
                onClick={() => setSelectedCafe(null)}
              >
                ×
              </button>
            </div>
            {selectedCafe.image && (
              <Image
                src={selectedCafe.image}
                width={260}
                height={160}
                className="rounded-lg mb-2"
                alt={`${selectedCafe.name} 圖片`}
              />
            )}
          </div>
        )}

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
