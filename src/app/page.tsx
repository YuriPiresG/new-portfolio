import Image from "next/image";

import logoWhite from "../assets/logoWhite.png";
import logoBlack from "../assets/logoBlack.png";

export default function Home() {
  return (
    <div className="flex">
      <Image src={logoBlack} alt="logo" className="w-32"/>
      <h1 className="">hello world</h1>
    </div>
  );
}
