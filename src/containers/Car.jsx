import React from "react";
import Carousel from "./Carousel";

const images = [
  "https://user-images.githubusercontent.com/99425379/228165064-8c913685-e36b-48d5-ac08-45aaec33db85.png",
  "https://user-images.githubusercontent.com/99425379/228165258-664974bf-4750-44ae-994f-a17ad627f89f.png",
  "https://user-images.githubusercontent.com/99425379/228165420-125e58df-0e97-4b24-939c-02791ef9689b.png",
];

const App = () => {
  return <Carousel images={images} />;
};

export default App;
