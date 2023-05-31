import Image from "next/image";
import React from "react";

type Props = {};

const ProfilePicture = (props: Props) => {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black drop-shadow-xl shadow-black rounded-full mx-auto mt-8 w-52 h-52"
        src={"/images/Profile.jpg"}
        alt="Nasir"
        width={208}
        height={208}
        priority={true}
      />
    </section>
  );
};

export default ProfilePicture;
