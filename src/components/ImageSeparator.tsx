import React from "react";
// Make sure to add your image to the `src/assets` folder
// and update the import path below.
import separatorImage from "@/assets/residueFree.jpg";

const ImageSeparator = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <img
          src={separatorImage}
          alt="Farmers working in a field with technology"
          className="w-full h-auto object-cover rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default ImageSeparator;