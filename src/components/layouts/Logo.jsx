import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-1">
      <Image
        alt="hero-kids"
        src={"/assets/logo.png"}
        width={50}
        height={40}
      ></Image>
      <h3 className="text-xl font-bold">Hero <span className="text-primary">Kidz</span>  </h3>
    </Link>
  );
};

export default Logo;
