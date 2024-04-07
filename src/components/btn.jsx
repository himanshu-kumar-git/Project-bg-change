import { useState } from "react";

export default function ColorBtn() {
  const [color, setcolor] = useState("grey");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed bottom-4 left-0 right-0 flex justify-center">
        <div className="flex flex-col">
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <button
              onClick={() => setcolor("black")}
              type="button"
              className="rounded-md border bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black border-black"
            >
              Black
            </button>
            <button
              onClick={() => setcolor("yellow")}
              type="button"
              className="rounded-md border bg-yellow-600 px-3 py-2 text-sm font-semibold text-white-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 border-black"
            >
              Yellow
            </button>
            <button
              onClick={() => setcolor("red")}
              type="button"
              className="rounded-md border bg-red-600 px-3 py-2 text-sm font-semibold text-white-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 border-black"
            >
              Red
            </button>
            <button
              onClick={() => setcolor("white")}
              type="button"
              className="rounded-md border bg-white px-3 py-2 text-sm font-semibold text-white-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 border-black"
            >
              White
            </button>
            <button
              onClick={() => setcolor("pink")}
              type="button"
              className="rounded-md border  bg-pink-600 px-3 py-2 text-sm font-semibold text-white-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 border-black"
            >
              Pink
            </button>
            <button
              onClick={() => setcolor("green")}
              type="button"
              className="rounded-md border bg-green-600 px-3 py-2 text-sm font-semibold text-white-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600  border-black"
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
