"use client"

import Image from "next/image";
import { useRef, useState } from "react";
import Map, { Marker, useMap } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRouter } from "next/navigation";

const cafeList = [
  {
    longitude: 121.50951259679532,
    latitude: 24.989379593908755,
    name: "ERC Cafe",
    station: "南勢角站",
    rating: 4.4,
  },
  {
    longitude: 121.50304984447662,
    latitude: 24.996114946275984,
    name: "豆BAR",
    station: "景安站",
    rating: 4.7,
  },
  {
    longitude: 121.52513849680022,
    latitude: 25.06482057733461,
    name: "果實咖啡堂",
    station: "景安站",
    rating: 4.0,
  },
  {
    longitude: 121.51334923912415,
    latitude: 25.01021444854709,
    name: "黑雨 kuro Ame",
    station: "頂溪站",
    rating: 4.9,
  },
  {
    longitude: 121.51538247959753,
    latitude: 25.00438227656673,
    name: "蜂巢咖啡自家烘焙館",
    station: "永安市場站",
    rating: 4.3,
  },
  {
    longitude: 121.52319296744078,
    latitude: 25.021535519899736,
    name: "UNI CAFE",
    station: "古亭站",
    rating: 4.8,
  },
  {
    longitude: 121.52893745446923,
    latitude: 25.030892371198068,
    name: "Irga 就此耶加烘豆坊",
    station: "東門站",
    rating: 4.9,
  },
  {
    longitude: 121.5297247629993,
    latitude: 25.030809096706918,
    name: "成真咖啡 台北永康店",
    station: "東門站",
    rating: 4.6,
  },
  {
    longitude: 121.50826103727327,
    latitude: 25.045866597821444,
    name: "FabCafe",
    station: "忠孝新生站",
    rating: 4.9,
  },
  {
    longitude: 121.53151768330763,
    latitude: 25.046575076305437,
    name: "KiOSK",
    station: "忠孝新生站",
    rating: 4.4,
  },
  {
    longitude: 121.53911295152976,
    latitude: 25.053043083127683,
    name: "貝克宅 Roasting House",
    station: "松江南京站",
    rating: 4.4,
  },
  {
    longitude: 121.53475879124123,
    latitude: 25.05863599559388,
    name: "CAFE RACO",
    station: "行天宮站",
    rating: 4.5,
  },
  {
    longitude: 121.52195703470053,
    latitude: 25.063837376182956,
    name: "八豆咖啡 BarDoor Coffee",
    station: "民權西路站",
    rating: 4.5,
  },
  {
    longitude: 121.50940855447037,
    latitude: 25.06029655496208,
    name: "COFE 喫茶咖啡",
    station: "大橋頭站",
    rating: 4.5,
  },
  {
    longitude: 121.48507898145473,
    latitude: 25.078839725524755,
    name: "驚嘆號咖啡",
    station: "三和國中站",
    rating: 4.3,
  },
  {
    longitude: 121.47516953727484,
    latitude: 25.08433559983829,
    name: "魚缸珈琲",
    station: "三民高中站",
    rating: 4.4,
  },
  {
    longitude: 121.48488987960394,
    latitude: 25.087705811761676,
    name: "不如咖啡BLUBLU Kafe",
    station: "徐匯中學站",
    rating: 4.1,
  },
  {
    longitude: 121.43301889679711,
    latitude: 25.032281562660813,
    name: "工寓咖啡",
    station: "輔大站",
    rating: 4.3,
  },
  {
    longitude: 121.42363929494448,
    latitude: 25.027207665359388,
    name: "甜心屋咖啡",
    station: "丹鳳站",
    rating: 4.5,
  }
  
];

export default function yellowCafe() {

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
                center: [121.52646648672432, 25.03862643754477],
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
            longitude: 121.52646648672432,
            latitude: 25.03862643754477, 
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
          <div className="absolute bottom-10 left-10 z-30 bg-[#E6D1B1]/60 rounded-lg shadow-lg w-[300px] p-4">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-bold">{selectedCafe.name}</h2>
              <button
                className="text-gray-500 hover:text-black text-xl"
                onClick={() => setSelectedCafe(null)}
              >
                ×
              </button>
            </div>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-semibold">捷運站：</span>{selectedCafe.station}
            </p>
            <p className="text-sm text-amber-600 font-semibold">
              評價：{selectedCafe.rating} ⭐
            </p>
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
