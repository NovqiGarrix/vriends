import { FunctionComponent } from "react";
import { Pannellum } from "@georgedrpg/pannellum-react-next";

const VR: FunctionComponent = () => {
  return (
    <div>
      <Pannellum
        width="100%"
        height="500px"
        image="https://pannellum.org/images/cerro-toco-0.jpg"
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={31}
          yaw={150}
          handleClick={() => {}}
          name="hs1"
        />
      </Pannellum>
    </div>
  );
};

export default VR;
