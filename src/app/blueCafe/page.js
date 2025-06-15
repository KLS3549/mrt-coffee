"use client"

import Image from "next/image";
import { useRef, useState } from "react";
import Map, { Marker, useMap } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRouter } from "next/navigation";

const cafeList = [
  {
    longitude:121.4502662507627,
    latitude: 24.986209171314442,
    name: "Qasim Coffee",
    station: "海山站",
    rating: 4.7,
    image: "/BL/BL1.jpg"
  },
  {
    longitude:121.46292827960005,
    latitude:25.01759765618167,
    name: "銘溢手作咖啡",
    station: "板橋站",
    rating: 4.8,
    image: "/BL/BL2.jpg"
  },
  {
    longitude: 121.47391506425608,
    latitude: 25.024030125520873,
    name: "Mellow Coffee",
    station: "新埔站",
    rating: 4.3,
    image: "/BL/BL3.jpg"
  },
  {
    longitude: 121.46992827960041,
    latitude:25.027778270869486,
    name: "KOYA Coffee",
    station: "江子翠站",
    rating: 4.5,
    image: "/BL/BL4.jpg"
  },
  {
    longitude:121.50780610843694,
    latitude: 25.03915715285547,
    name: "La Grotta",
    station: "西門站",
    rating: 4.5,
    image: "/BL/BL5.jpg"
  },
  {
    longitude: 121.51340258145348,
    latitude: 25.045476218171466,
    name: "NOTCH咖啡 本町店",
    station: "台北車站",
    rating: 4.3,
    image: "/BL/BL6.jpg"
  },
  {
    longitude: 121.53210820843705,
    latitude: 25.041406549720538,
    name: "Coffee Sind",
    station: "忠孝新生站",
    rating: 4.8,
    image: "/BL/BL7.jpg"
  },
  {
    longitude: 121.54008218145336,
    latitude: 25.042728305726335,
    name: "晴境易得",
    station: "忠孝復興站",
    rating: 4.5,
    image: "/BL/BL8.jpg"
  },
  {
    longitude: 121.5559068219287,
    latitude: 25.03863602468171,
    name: "Olivia Coffee Roaster",
    station: "國父紀念館站",
    rating: 4.5,
    image: "/BL/BL9.jpg"
  },
  {
    longitude: 121.56488555632193,
    latitude: 25.04219458367923,
    name: "We & Me cafe",
    station: "市政府捷運站",
    rating: 4.3,
    image: "/BL/BL10.jpg"
  },
  {
    longitude:121.56909439309285,
    latitude: 25.041437045967545,
    name: "巢 nido",
    station: "市政府站",
    rating: 4.1,
    image: "/BL/BL11.jpg"
  },
  {
    longitude: 121.57498981028918,
    latitude: 25.037884569871533,
    name: "TapLife Cafe & Studio",
    station: "永春站",
    rating: 4.9,
    image: "/BL/BL12.jpg"
  },
  {
    longitude:121.57764329494506,
    latitude: 25.037554808367503,
    name: "蘋果肉桂 Café & Bistro",
    station: "永春站",
    rating: 4.6,
    image: "/BL/BL13.jpg"
  },
  {
    longitude:121.59266377774924,
    latitude: 25.052772147439075,
    name: "腦咖 CAFFE BRAIN",
    station: "昆陽站",
    rating: 4.8,
    image: "/BL/BL14.jpg"
  },
  {
    longitude:121.60165681029,
    latitude: 25.054385222349453,
    name: "玉虫畫室",
    station: "南港站",
    rating: 4.6,
    image: "/BL/BL15.jpg"
  }  
  
];

export default function blueCafe() {

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
                center: [121.57498981028918, 25.037884569871533],
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
            longitude: 121.57498981028918,
            latitude: 25.037884569871533,
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
