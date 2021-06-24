import "./App.css";
const App = () => {
  return (
    <div className="App h-screen flex flex-col justify-center from-purple to-pink  bg-gradient-to-br w-full sm:mx-auto">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="max-w-lg rounded-lg bg-white shadow-lg sm:mx-auto">
          <div className="box-content shadow-lg bg-gray-50 py-28 px-28 space-y-4">
              <p className="font-sans text-2xl "> Upload your image</p> 
              <p className="font-sans text-sm px-3"> File should be jpeg, png..</p>
              <div className="border-dotted border-4 border-purple py-12 px-12">
                
              </div>
            </div>

          </div>
        </div>
      </div>
    
  );
};

export default App;
