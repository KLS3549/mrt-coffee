"use client"

import Image from "next/image";
import { useRef, useState } from "react";
import Map, { Marker, useMap } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRouter } from "next/navigation";

const cafeList = [
  {
    longitude: 121.46673964741477,
    latitude: 25.124401296487274,
    name: "爐鍋咖啡 Luguo Cafe",
    station: "關渡站",
    rating: 4.6,
    image: "/R/R1.jpg"
  },
  {
    longitude: 121.49839159788012,
    latitude: 25.13327612592044,
    name: "N Café",
    station: "北投站",
    rating: 4.2,
    image: "/R/R2.jpg"
  },
  {
    longitude: 121.51602987871614,
    latitude: 25.1145960325704,
    name: "老窩咖啡",
    station: "石牌站",
    rating: 4.2,
    image: "/R/R3.jpg"
  },
  {
    longitude: 121.51880699770419,
    latitude: 25.064177227124727,
    name: "別所 shelter",
    station: "民權西路站",
    rating: 4.1,
    image: "/R/R4.jpg"
  },
  {
    longitude: 121.51993290368867,
    latitude: 25.058857842611406,
    name: "好啊咖啡",
    station: "雙連站",
    rating: 4.9,
    image: "/R/R5.jpg"
  },
  {
    longitude: 121.52025535006551,
    latitude: 25.055511579166264,
    name: "北風社",
    station: "中山站",
    rating: 4.2,
    image: "/R/R6.jpg"
  },
  {
    longitude: 121.52417518068374,
    latitude: 25.0538358845923,
    name: "大鶴黑寶",
    station: "中山站",
    rating: 4.3,
    image: "/R/R7.jpg"
  },
  {
    longitude: 121.52196828438471,
    latitude: 25.04889798946141,
    name: "慢動作咖啡館",
    station: "台北車站",
    rating: 4.7,
    image: "/R/R8.jpg"
  },
  {
    longitude: 121.51660746666033,
    latitude: 25.03191223611397,
    name: "白胖咖啡館",
    station: "中正紀念堂站",
    rating: 4.9,
    image: "/R/R9.jpg"
  },
  {
    longitude: 121.52996653216603,
    latitude: 25.030838439282387,
    name: "羊毛與花．永康",
    station: "東門站",
    rating: 4.4,
    image: "/R/R10.jpg"
  },
  {
    longitude: 121.53835931521866,
    latitude: 25.03104241881393,
    name: "2J CAFE",
    station: "大安森林公園站",
    rating: 4.3,
    image: "/R/R11.jpg"
  },
  {
    longitude: 121.54483579626317,
    latitude: 25.032084655376718,
    name: "這間咖啡",
    station: "大安站",
    rating: 4.2,
    image: "/R/R12.jpg"
  },
  {
    longitude: 121.55603157273467,
    latitude: 25.02859970174685,
    name: "光孚咖啡",
    station: "台北101/世貿站",
    rating: 4.5,
    image: "/R/R13.jpg"
  },
  {
    longitude: 121.56179422396723,
    latitude: 25.028896801200048,
    name: "呷滴 Jia Dee",
    station: "台北101/世貿站",
    rating: 4.5,
    image: "/R/R14.jpg"
  },
  {
    longitude: 121.5703915604077,
    latitude: 25.02749350333757,
    name: "象山日光咖啡 Sunshine Cafe",
    station: "象山站",
    rating: 4.6,
    image: "/R/R15.jpg"
  }
  
];

export default function redCafe() {

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
          className="absolute bottom-10 right-10 z-20 bg-[#E6D1B1] hover:bg-[#E6D1B1]/60 text-black font-bold py-2 px-4 rounded shadow"
          onClick={() => {
            if (mapRef.current) {
              mapRef.current.flyTo({
                center: [121.54717348515983, 25.078034404867136],
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
            longitude: 121.54717348515983, 
            latitude: 25.078034404867136,
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
          <div className="flex flex-col items-center text-center absolute bottom-10 left-10 z-30 bg-[#E6D1B1] rounded-lg shadow-lg w-[300px] p-4">
            <div className="flex justify-between items-center w-full mb-2">
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
              setSelectedCafe(cafe);
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
