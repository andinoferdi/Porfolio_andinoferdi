import React from "react";

const Divider = () => {
  return (
    <div
      className="custom-shape-divider-top-custom"
      style={{
        marginTop: "-1px",
        position: "relative",
      }}
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          filter: "drop-shadow(0 0 10px #FF0000)",
        }}
      >
        {/* Path Pertama: Abu-abu */}
        <path
          d="M0,0V40C40,55,90,75,150,65C210,55,290,25,380,35C470,45,570,90,660,105C750,120,840,100,930,80C1020,60,1110,40,1155,30L1200,20V0Z"
          fill="#B0B0B0"
          opacity="1"
        ></path>

        {/* Path Kedua: Merah */}
        <path
          d="M0,0V20C30,40,70,60,120,70C180,90,260,70,340,50C420,30,510,10,590,30C670,50,760,80,850,95C940,110,1030,100,1120,85C1160,75,1200,60,1200,60V0Z"
          fill="#FF0000"
          opacity="0.9"
        ></path>

        {/* Path Ketiga: Hitam */}
        <path
          d="M0,0V5C100,30,250,80,400,70C550,60,700,10,850,5C1000,0,1150,20,1200,30V0Z"
          fill="#000000"
        ></path>
      </svg>
    </div>
  );
};

export default Divider;
