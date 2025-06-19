import Image from "next/image";
import React from "react";

const DetailsSction = () => {
  return (
    <section className="grid grid-1">
      <figure>
        <Image width={800} height={400} src="/images/sich.png" alt="" />
      </figure>
      <figure>
        <Image
          width={400}
          height={400}
          src="/images/3.png"
          alt=""
          className="autoRotate"
        />
      </figure>
      <h2 className="autoShow">Introduce</h2>
    </section>
  );
};

export default DetailsSction;
