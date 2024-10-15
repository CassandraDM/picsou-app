function App() {
  return (
    <div>
      <div className="absolute top-0 right-0 bg-white-800 w-full h-full bg-opacity-30 backdrop-blur-sm flex items-center justify-center flex-col">
        <button className="bg-slate-800 text-white text-xl px-4 py-2 hover:bg-transparent hover:text-slate-800 transition all">
          Click me
        </button>
        <div className="grid grid-cols12 gap-4 w-full">
          <div className="bg-gray-200 p-10 md:col-span-6 sm:col-span-12">
            col1
          </div>
          <div className="bg-gray-200 p-10 md:col-span-6 sm:col-span-12">
            col2
          </div>
        </div>
      </div>
      <h1 className="text-orange-500 text-6xl font-bold">Hello World</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam unde
        ipsam esse, beatae tenetur illo nobis enim quo harum error pariatur
        provident nulla nisi praesentium ratione sint perferendis in magni?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam unde
        ipsam esse, beatae tenetur illo nobis enim quo harum error pariatur
        provident nulla nisi praesentium ratione sint perferendis in magni?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam unde
        ipsam esse, beatae tenetur illo nobis enim quo harum error pariatur
        provident nulla nisi praesentium ratione sint perferendis in magni?
      </p>
    </div>
  );
}

export default App;
