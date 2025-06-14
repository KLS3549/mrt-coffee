import Image from "next/image";

const cafes = [
  {
    name: "象山日光咖啡 Sunshine Cafe",
    station: "象山站",
    rating: 4.3,
  },
  {
    name: "Simple Kaffa",
    station: "松江南京站",
    rating: 4.5,
  },
  {
    name: "Fika Fika Cafe",
    station: "中山站",
    rating: 4.2,
  },
  {
    name: "Woolloomooloo",
    station: "大安站",
    rating: 4.4,
  },
  {
    name: "Woolloomooloo",
    station: "大安站",
    rating: 4.4,
  },
  {
    name: "Woolloomooloo",
    station: "大安站",
    rating: 4.4,
  },
  {
    name: "Woolloomooloo",
    station: "大安站",
    rating: 4.4,
  },
  {
    name: "Woolloomooloo",
    station: "大安站",
    rating: 4.4,
  },
  {
    name: "Woolloomooloo",
    station: "大安站",
    rating: 4.4,
  },
  {
    name: "Woolloomooloo",
    station: "大安站",
    rating: 4.4,
  },
  {
    name: "Woolloomooloo",
    station: "大安站",
    rating: 4.4,
  },
  {
    name: "Woolloomooloo",
    station: "大安站",
    rating: 4.4,
  },
  {
    name: "Woolloomooloo",
    station: "大安站",
    rating: 4.4,
  },
  {
    name: "Woolloomooloo",
    station: "大安站",
    rating: 4.4,
  },
  {
    name: "Woolloomooloo",
    station: "大安站",
    rating: 4.4,
  },
  {
    name: "Woolloomooloo",
    station: "大安站",
    rating: 4.4,
  },
  
];



export default function redCafe() {


  return (
    <div>
          <div className="relative flex flex-col items-center pt-8 pb-8 gap-10 min-h-screen">

            <div className="absolute top-0 left-0 w-full py-6 bg-[#B8AA95]/80"></div>

            <div className="absolute top-20 right-10 w-[500px] max-w-md h-full overflow-y-auto space-y-4 z-10 ">
          {cafes.map((cafe, index) => (
          <div
            key={index}
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



    </div>


  );
}
