"use client"

import Image from "next/image";
import { useRef, useState } from "react";
import Map, { Marker, useMap } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRouter } from "next/navigation";
import Link from "next/link";

import FavoriteButton from "../auth/favButton";
import { useAuth } from "../auth/AuthContext";
import UserNav from "../auth/UserNav";

const cafeList = [
  {
    longitude: 121.5429989354181,
    latitude: 24.97621641793249,
    name: "白楊樹 Cafe Björk",
    station: "七張站",
    rating: 4.5,
    image: "/G/G1.jpg"
  },
  {
    longitude: 121.54291389494257,
    latitude: 24.97929235916373,
    name: "Miss May Cafe",
    station: "大坪林站",
    rating: 4.8,
    image: "/G/G2.jpg"
  },
  {
    longitude: 121.54132642192685,
    latitude: 24.994251059643734,
    name: "天島咖啡TenshimaCafe",
    station: "景美站",
    rating: 4.3,
    image: "/G/G3.jpg"
  },
  {
    longitude: 121.53825379309124,
    latitude: 25.00041573878813,
    name: "河童家 かっぱや",
    station: "萬隆站",
    rating: 4.4,
    image: "/G/G4.jpg"
  },
  {
    longitude: 121.53911479123889,
    latitude: 25.002134276744048,
    name: "JOHN DOE CAFÉ 無名氏咖啡",
    station: "萬隆站",
    rating: 4.6,
    image: "/G/G5.jpg"
  },
  {
    longitude:121.53319043541971,
    latitude: 25.015361038356804,
    name: "The Misanthrope Society 厭世會社",
    station: "公館站",
    rating: 4.6,
    image: "/G/G6.jpg"
  },
  {
    longitude: 121.5315987661083,
    latitude: 25.02040659446185,
    name: "半路咖啡halfway cafe",
    station: "台電大樓站",
    rating: 4.3,
    image: "/G/G7.jpg"
  },
  {
    longitude: 121.50410295076512,
    latitude: 25.04604501758832,
    name: "暗角咖啡",
    station: "古亭站",
    rating: 4.1,
    image: "/G/G8.jpg"
  },
  {
    longitude: 121.5051422523094,
    latitude: 25.045998440469823,
    name: "妳有咖啡 neo cafe",
    station: "西門站",
    rating: 4.2,
    image: "/G/G9.jpg"
  },
  {
    longitude: 121.50675699494514,
    latitude: 25.03946224956869,
    name: "街口6號珈啡",
    station: "西門站",
    rating: 4.6,
    image: "/G/G10.jpg"
  },
  {
    longitude:121.51066878145399,
    latitude: 25.056681237315434,
    name: "小城外 Bar CityNorth",
    station: "北門站",
    rating: 4.5,
    image: "/G/G11.jpg"
  },
  {
    longitude: 121.52121157960147,
    latitude: 25.052900647245384,
    name: "雄獅星空",
    station: "中山站",
    rating: 4.6,
    image: "/G/G12.jpg"
  },
  {
    longitude: 121.52122793727355,
    latitude: 25.05342002411044,
    name: "咖啡瑪榭 中山店",
    station: "中山站",
    rating: 4.2,
    image: "/G/G13.jpg"
  },
  {
    longitude: 121.5544880846493,
    latitude: 25.052541669981952,
    name: "Remember Me_記得我．café",
    station: "台北小巨蛋站",
    rating: 4.5,
    image: "/G/G14.jpg"
  },
  {
    longitude: 121.55591006425706,
    latitude: 25.0477423337957,
    name: "一文咖啡",
    station: "南京三民站",
    rating: 4.5,
    image: "/G/G15.jpg"
  },
  {
    longitude: 121.58044195076528,
    latitude: 25.050759989715864,
    name: "K's New Coffee",
    station: "松山站",
    rating: 4.8,
    image: "/G/G16.jpg"
  }
  
];

export default function greenCafe() {

  const [selectedCafe, setSelectedCafe] = useState(null);
  const { user } = useAuth();//定義使用者

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
                center: [121.5759703090182, 25.018381765803603],
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
            longitude: 121.5759703090182,
            latitude: 25.018381765803603,
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
                <div className='w-5 h-5 bg-[#068559]/60 rounded-full'></div>
              </Marker>
            ))
          }
        </Map>

        {selectedCafe && (
          <div className="flex flex-col items-center text-center absolute bottom-10 left-10 z-30 bg-[#E6D1B1] rounded-lg shadow-lg w-[300px] p-4">
            <div className="flex justify-between items-center w-full mb-2">
              <h2 className="text-xl font-bold">{selectedCafe.name}</h2>
         
              {user && (
                <div className="absolute top-2 right-2">
                  <FavoriteButton cafe={selectedCafe} />
                </div>
              )}
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


        <div className="absolute top-20 right-3 w-[400px] max-w-md h-[450px] overflow-y-auto 
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

        <div className="absolute top-6 right-3">
        <UserNav/>
      </div>

        <div className="absolute top-20 left-4 w-[150px] max-w-md h-[150px] overflow-y-auto 
        overflow-x-hidden space-y-4 z-10 ">
          <Link href="/MRTRed" className="bg-[#E6D1B1]/60 rounded-lg shadow p-2 flex flex-row gap-2 transition hover:scale-[1.01]">
            <div className="w-5 h-5 bg-[#DD0128]/60 rounded-full"></div>
            淡水信義線
          </Link>
          <Link href="/MRTYellow" className="bg-[#E6D1B1]/60 rounded-lg shadow p-2 flex flex-row gap-2 transition hover:scale-[1.01]">
            <div className="w-5 h-5 bg-[#FBAE12]/60 rounded-full"></div>
            中和新蘆線
          </Link>
          <Link href="/MRTBlue" className="bg-[#E6D1B1]/60 rounded-lg shadow p-2 flex flex-row gap-2 transition hover:scale-[1.01]">
            <div className="w-5 h-5 bg-[#0372C1]/60 rounded-full"></div>
            板南線
          </Link>
          <Link href="/MRTBrown" className="bg-[#E6D1B1]/60 rounded-lg shadow p-2 flex flex-row gap-2 transition hover:scale-[1.01]">
            <div className="w-5 h-5 bg-[#BF8F2D]/60 rounded-full"></div>
            文湖線
          </Link>
        </div>

      </div>

    </>

  );
}
