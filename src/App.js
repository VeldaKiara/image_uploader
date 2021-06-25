import "./App.css";
import upload_image from "./assets/images/upload_image.svg";

const App = () => {
  return (
    <div className="App h-screen flex flex-col justify-center from-purple to-pink  bg-gradient-to-br w-full sm:mx-auto">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="max-w-lg rounded-lg box-content bg-white shadow-inner-lg py-32 px-28 space-y-4 sm:mx-auto">
              <p className="font-sans text-2xl -mt-24"> Upload your image</p> 
              <p className="font-sans text-sm space-y-5 px-3 py-7"> File should be jpeg, png..</p>
              <div className="border-dotted border-4 -m-16 border-purple py-48 px-44"> 
              <img src={upload_image} alt="upload"></img>
              <p className="font-sans text-base "> Drag and Drop your images here</p>
              </div>
            </div>

          </div>
        </div>
    
    
  );
};

export default App;
