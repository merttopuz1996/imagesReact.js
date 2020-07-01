import React from 'react'
import './imagelist.css'
import  Image from './Image'
 const ImageList = ({Images}) => {
    const preparedImageList = Images.map(image =>{
       return (
        //    <img key ={image.id} src ={image.urls.regular}/>
         <Image  key ={image.id} image={image}/>
        )
    });
    return (
        <div className="imagelist-container">
            {/* {Images.length} */}
            {preparedImageList}
        </div>
    )

}
export default ImageList;
// import React, { Component } from 'react'

//  class ImageList extends Component {
//     render() {
//       const preparedImageList= this.props.Images.map(image=>{
//             return(
//                 <img key ={image.id} src={image.urls.regular}/>
//             )
//         });
//         return(

//         <div>
//             {preparedImageList}
//         </div>
//         )
//     }
// }
// export default ImageList