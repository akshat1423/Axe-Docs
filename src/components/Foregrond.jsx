import React, { useRef } from "react";
import Cards from "./Cards";

const Foregrond = () => {
  const ref = useRef(null);
  console.log(ref);
  const data = [
    {
      desc: "Vanita tamatar khati hai",
      fileSize: "1.0mb",
      close: false,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Vanita amrud khati hai",
      fileSize: "1.0mb",
      close: true,
      tagDetails: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Incy Pincy Puncy had a great fall",
      fileSize: "1.0mb",
      close: false,
      tagDetails: {
        isOpen: true,
        tagTitle: "Uploading",
        tagColor: "blue",
      },
    },
    {
      desc: "Ham bhi bana lenge",
      fileSize: "1.0mb",
      close: true,
      tagDetails: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-10  "
    >
      {data.map((item, index) => (
        <Cards data={item} referenace={ref} />
      ))}
    </div>
  );
};

export default Foregrond;
