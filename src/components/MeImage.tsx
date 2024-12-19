"use client";
import Image from "next/image";
import me from "../../public/me.png";

export const MeImage = ({ color = true }) => {
  return (
    <div className="me-container">
      <div className={color ? "me-color-x" : undefined}>
        <div className={color ? "me-color-y" : undefined}>
          <Image className="me" src={me} alt="Photo of Hugo Pérard" priority />
        </div>
      </div>
    </div>
  );
};
