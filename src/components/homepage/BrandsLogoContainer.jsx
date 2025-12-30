import React from "react";
import samsung from "../../assets/brand logos/samsung.png";
import apple from "../../assets/brand logos/apple.png";
import huawei from "../../assets/brand logos/huawei.png";
import Iqoo from "../../assets/brand logos/Iqoo.png";
import oneplus from "../../assets/brand logos/oneplus.png";
import oppo from "../../assets/brand logos/oppo.png";
import pixel from "../../assets/brand logos/pixel.png";
import realme from "../../assets/brand logos/realme.png";
import vivo from "../../assets/brand logos/vivo.png";
import xiomi from "../../assets/brand logos/xiomi.png";

import Marquee from "react-fast-marquee";
const BrandsLogoContainer = () => {
  return (
    <div className="mt-16">
      <Marquee >
      <img src={samsung} alt="" className="w-26 mr-16" />
      <img src={apple} alt="" className="w-12 mr-16" />
      <img src={huawei} alt="" className="w-26 mr-16" />
      <img src={Iqoo} alt="" className="w-16 mr-16" />
      <img src={oneplus} alt="" className="w-12 mr-16" />
      <img src={oppo} alt="" className="w-26 mr-16" />
      <img src={pixel} alt="" className="w-12 mr-16" />
      <img src={realme} alt="" className="w-26 mr-16" />
      <img src={xiomi} alt="" className="w-16 mr-16" />
      <img src={vivo} alt="" className="w-22 mr-16" />
      </Marquee>
    </div>
  );
};

export default BrandsLogoContainer;
