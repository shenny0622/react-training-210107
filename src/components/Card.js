// import React,{useState, useEffect} from "react";
import clock from '../images/icons_clock.png'
import pin from '../images/icons_pin.png'
import phone from '../images/icons_phone.png'
import tag from '../images/icons_tag.png'
// import LikeIcon from './LikeIcon';
// import 'materialize-css';
// import {Button, Icon} from 'react-materialize'
// import 'materialize-css/dist/css/materialize.min.css';

const Card = (props) => {

  const onLikeClick=(e) =>{
    e.preventDefault()
    //抓到當下選得值
    let icon = document.querySelector('.material-icons');
   console.log(icon);
   icon.textContent="favorite"
  //  document.querySelector("material-icons").innerHTML="favorite_border"
  //  return(<a onClick={onLikeClick} href="#"><span className="circle"><i className="material-icons color like">favorite_border</i></span></a>

   
  //  props.getZone(e.target.value);
 }
    // const [state, setState] = useState(
    //   {Picture1:'',
    //     Name   :'',
    //     Zone   :'',
    //     Opentime:'',
    //     Add:'',
    //     Tel : '',
    //     Ticketinfo:''}
    // );
    // props:{
    //   item:{
    //     Picture1:
    //     Name:''
    //     Zone:''
    //     Opentime:''
    //     Add:''
    //     Tel: ''
    //     Ticketinfo:''
    //   }
    // }

//api
  //   useEffect(()=>{
  //       fetch( 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json',{method:"GET"})
  //         .then(res => res.json())
  //         .then(
  //           (data) => {                
  //             const card =  data.result.records[1];
              
  //             setState({
  //               // items: data.result.records
  //               image: card.Picture1,
  //               name: card.Name,
  //               zone: card.Zone,  
  //               opentime: card.Opentime,
  //               address: card.Add,
  //               tel: card.Tel,
  //               info: card.Ticketinfo,   
  //             });
  //           });
  //           // (sError) => {
  //           //   setState({
  //           //     isLoaded: true,
  //           //     error:sError,
  //           //     items:null
  //           //   });
  //           // }   
  // },[]);

  // const { image, name, zone,opentime,address,tel,info } = state;
  // const {Picture1,Name,Zone,Opentime,Add,Tel,Ticketinfo} = props;
  const {item} =  props;
  return(
    <li className="list-card">
    {/* <a className="btn-floating waves-effect red accent-2"><i classNames="material-icons like">favorite_border</i></a> */}
     {/* <a href="https://git-scm.castlestech.cloud/shenny/React-training-201218"><span className="circle"><i className="material-icons color product-fav">favorite_border</i></span></a> */}
      <div className="img" style={{backgroundImage: `url(${item.Picture1})`}}>
      <a onClick={onLikeClick} href="#"><span className="circle"><i className="material-icons color like">favorite_border</i></span></a>
          <div className="img-title">
              <h3 className="title-24px">{item.Name}</h3>
              <p className="title-16px">{item.Zone}</p>
          </div>
      </div>
      <div className="content-card">
      {/* <a onClick={onLikeClick} href="#"><span className="circle"><i className="material-icons color like">favorite_border</i></span></a> */}
      
          <p><img src={clock}  alt="icon"/>{item.Opentime}</p>
          <p><img src={pin}  alt="icon"/>{item.Add}</p>
          <div className="card_down_area">
            <p><img src={phone}  alt="icon"/>{item.Tel}</p>
            <p><img src={tag}  alt="icon"/>{item.Ticketinfo}</p>
          </div>
      </div>
      {/* <img src={image}  alt=""/> */}
    </li>

  )
};
export default Card;