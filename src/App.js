function App() {
  return (
    <>
      <div className=" h-screen w-full flex justify-center items-center">
        <div className="w-4/5  p-3 rounded-2xl shadow shadow-slate-600 sm:p-8">
          <div className="w-full h-full ring ring-offset-0  p-4 rounded sm:p-8 sm:rounded-2xl sm:ring-slate-500">
            <div className="sm:flex sm:justify-between mb-5">
              <div>
                <h3 className="font-sans text-purple-900 text-xl font-semibold tracking-tight text-left">
                  Men's Shoes Air Max 90 SE
                </h3>
                <p className="text-slate-500">
                  India's Most Comfortable Sports Shoe.
                </p>
              </div>
              <div className="flex justify-between w-40 my-3">
                <p className="text-lg sm:text-xl">Quantity : </p>
                <h1 className="text-center text-sm sm:text-lg border-2 border-slate-500 p-1 w-11 h-8 flex justify-center items-center rounded">
                  3
                </h1>
              </div>
            </div>
            <div className="md:flex md:justify-between">
              <div className="my-3">
                <p className="leading-7">
                  <span className="font-semibold">Manufacturer</span> : Elevar
                  Sports Pvt. Ltd.
                </p>
                <p className="leading-7">
                  <span className="font-semibold">Item model number</span> : UK
                  11
                </p>
                <p className="leading-7">
                  <span className="font-semibold">ASIN</span> : B0BJ364N9Q
                </p>
              </div>
              <div className="flex flex-wrap md:justify-end">
                <div className="flex justify-between w-40 m-2">
                  <p className="text-lg sm:text-xl">Length : </p>
                  <h1 className="text-center text-sm sm:text-lg border-2 border-slate-500 p-1 w-15 h-8 flex justify-center items-center rounded">
                    {" "}
                    33 cm
                  </h1>
                </div>
                <div className="flex justify-between w-40 m-2 ">
                  <p className="sm:text-xl">Width : </p>
                  <h1 className="text-center text-sm sm:text-lg border-2 border-slate-500 p-1 w-15 h-8 flex justify-center items-center rounded">
                    24.5 cm
                  </h1>
                </div>
                <div className="flex justify-between w-40 m-2 ">
                  <p className="sm:text-xl">Height : </p>
                  <h1 className="text-center text-sm sm:text-lg border-2 border-slate-500 p-1 w-15 h-8 flex justify-center items-center rounded">
                    11.5 cm
                  </h1>
                </div>
              </div>
            </div>
            <div className="my-4 w-full flex justify-center">
              <button className="bg-violet-700 hover:bg-zinc-900 text-white font-bold py-2 px-4 mx-2 rounded">
                Add Item
              </button>
              <button className="bg-cyan-700 hover:bg-zinc-900 text-white font-bold py-2 px-4 mx-2 rounded">
                Add Brief
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;