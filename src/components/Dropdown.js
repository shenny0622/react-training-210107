// import React,{useState, useEffect} from "react";


const Dropdown = (props) =>{
  const {itemZones} =  props;
  
  const onDropDownCahnge =(e) =>{
    //綁定 onChange 事件
    // 測試是否有綁成功 console.log('hi');

    // console 第一個變數 'onDropDownCahnge' 代表是子層自己撈的值 (第一個變數好辨認是哪邊產生的值)
    console.log('onDropDownCahnge',e.target.value);
    //子傳給父的值
    props.getZone(e.target.value);
  }

  return(
    <select onChange={onDropDownCahnge}>
           <option selected disabled>--請選擇行政區--</option>
           {/* selected 要拿掉  */ }
           {/* react建議設定預設值的方式是 在select標籤使用 value， 
           value="--請選擇行政區--" * /}

          
           {/* notes:使用 map 會自動 return，但用 forEach 和 for 迴圈不會自動 return，
            因此這邊建議直接使用 map 比較好 */}
          {itemZones.map((zone) =>(
              // itemZones[index] = zone
            <option key={zone} value={zone}>{zone}</option>   
            )
          )}
    </select>

  )
}  
   
  // const [state,setState] = useState({
  //   // items: [],
  //   error: null,
  //   isLoaded: false,
  //   itemZones:[] //宣告一個新的陣列(不重複區域)

  // });
  

  // useEffect(()=>{
  //       fetch( 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json',{method:"GET"})
  //         .then(res => res.json())
  //         .then(
  //           (data) => {
  //             setState({
  //               isLoaded: true,
  //               // items: data.result.records,

  //               // 過濾重複的區域資料，並存在 itemZones 的新陣列中
  //               itemZones: data.result.records.map((item)=>(item.Zone)).filter(function(element, index, arr){
  //                   return arr.indexOf(element) === index;
  //               })
  //             });
  //           },
  //           (sError) => {
  //             setState({
  //               isLoaded: true,
  //               error:sError
  //             });
  //           }
  //         )
  // },[]);


        // const { error, isLoaded,itemZones } = state;

        // if (error) {
        //   return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //   return <div>Loading...</div>;
        // } else {
        // return (
        //           <select>
        //                 <option selected disabled>--請選擇行政區--</option>

        //                  {/* notes:使用 map 會自動 return，但用 forEach 和 for 迴圈不會自動 return，
        //                 因此這邊建議直接使用 map 比較好 */}
        //                 {itemZones.map((zone) =>(
        //                     // itemZones[index] = zone
        //                         <option value={zone}
        //                          >{zone}</option>   
                         

                           
        //                     )
        //                 )}
                     
        //                 {/* {result.map((zone) =>(
        //                     // itemZones[index] = zone
        //                         <option value={zone}
        //                          >{zone}</option>   
                         

                           
        //                     )
        //                 )} */}
      
        //           </select>
             
        //   );
        // }
    


export default Dropdown;