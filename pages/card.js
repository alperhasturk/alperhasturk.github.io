import React from "react";
import Image from "next/image";

const Card = ({ title, image, link, alt, content }) => {
  return (
    <div
      id="card"
      className=" text-center rounded-lg m-10 mx-5 p-5  bg-bg border-white border-y-2 drop-shadow-md border-opacity-10  "
    >
      <Image className=" rounded-lg mx-auto" src={image} alt={alt} width={500} height={500} />
      <h3 className="text-2xl text-text font-medium pt-8 pb-3">{title}</h3>
      <p className="text-text ">
        {content}
        <a
          className="bg-gradient-to-br from-accent via-orange-500 to-yellow-500 text-white px-3 py-1 mx-3 rounded-lg hover:opacity-80"
          href={link}
        >
          here
        </a>
      </p>
    </div>
  );
};

export default Card;
