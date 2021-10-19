import React from 'react';
import Menu from '../Menu/Menu';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <div className="banner-container ">
                <div className="">
                    <div className="row d-flex banner align-items-center justify-content-center">
                        <Menu></Menu>
                        <div className="col-md-9 title-section">
                            <h1 className="title">
                            Wherever the art of medicine is loved, <br /> there is also a love of humanity.
                            </h1>
                           
                           
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;


// import React from "react";
// import Menu from "../Menu/Menu";
// import "./Header.css";

// const Header = () => {
//   return (
//     <div className="banner-container ">
//       <div className="">
//         <div className="row d-flex banner align-items-center justify-content-center">
//           <Menu></Menu>
//           <div className="col-md-6">
//             <h1 className="title">
//               BE THE BASKETBALL <br /> STAR AND SHINE
//             </h1>
//             <p className="text-white text-center mt-3">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//               tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//             </p>
//             <button className="mt-3 about-btn">About Us</button>
//           </div>
//           <div className="col-md-6"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;