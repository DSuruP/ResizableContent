import React, { useState } from "react";
import { Resizable } from "re-resizable";
import img1 from "./Img/lake-view.jpeg";
import img2 from "./Img/lake-view2.jpeg";

export const Second = () => {
   const [state, setState] = useState({ width: 615, height: 415 });
   return (
      <Resizable
         style={{ marginLeft: 24, marginTop: 24, border: "1px solid black", float:"left" }}
         size={{ width: state.width, height: state.height }}
         onResizeStop={(d) => {
            setState({
               width: state.width + d.width, height: state.height + d.height,});
            }}>
         <h1>Bhopal</h1>
         <img src={img1} alt="" width={240} height={153} />
         <img src={img2} alt="" width={240} height={153} />
         <div>
           <p className="ex2">Lake View</p>
         </div>
      </Resizable>
   );
}
