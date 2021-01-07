// 下方為原本 components 使用 function 的寫法(因為使用 hook 串 api，盡量統一都使用 funtion 寫法)

// import React,{useState, useEffect} from "react";

const Buttons = (props) =>{
  const { 
    color,
    content,
    // ...Props
  } = props;
  
  const onButtonClick=(e) =>{
     //抓到當下選得值
    console.log('onButtonClick',e.target.value);
    props.getZone(e.target.value);
  }
  return (
    // <button>{this.props.text} </button>
    // <button className={color} {...Props} onClick={() => alert(color)}>
    <button type="button" className={color} onClick={onButtonClick} value={content}>
    {content}
    </button>  
  );  
};


// 下方為原本 components 使用 class 的寫法
// import React, { Component } from 'react';
// // import styled from 'styled-compoenets';


// class Buttons extends Component {
//     //在`class`中宣告一個事件
//     // writeConsole() {
//     //     console.log('點了點了點了')
//     // }
    
//     render() {
//         const { 
//             color,
//             content,
//             // ...Props ask!
//           } = this.props;
          
//         return (
//             // <button>{this.props.text} </button>
//             // <button className={color} {...Props} onClick={() => alert(color)}>
//             //下方拿掉這個 {...Props}
//             <button className={color} >
//             {content}
//           </button>
        
          
            
//         );
//     }
// }



export default Buttons;