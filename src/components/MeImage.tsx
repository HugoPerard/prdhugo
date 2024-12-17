"use client";
import Image from "next/image";
import me from "../../public/me.png";

export const MeImage = () => {
  return (
    <div className="me-container">
      <Image className="me" src={me} alt="Photo of Hugo Pérard" priority />
    </div>
  );
};
