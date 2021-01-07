import './css/App.css';
import gotopIcon from './images/btn_goTop.png'
import Buttons from './components/Buttons';
import Dropdown from './components/Dropdown';
import Pagination from './components/Pagination';
import Card from './components/Card';
import React,{useState, useEffect} from "react";
// import 'materialize-css';
// import { HashRouter } from "react-router-dom";
;


const App = () =>{
    //宣告變數
    const [state,setState] = useState({
      cards: [],
      error: null,
      isLoaded: false,
      itemZones:[], //宣告一個新的陣列(不重複區域)
      cardsByZone:[], //宣告一個新的陣列(下拉選單和按鈕撈到的值跟父層 API 資料做比對)
      currentZone:'請選擇行政區'
    });
   const [currentPage, setCurrentPage] = useState(1);//不太懂 useState(1)
   const [postsPerPage] = useState(4);

//scroll 效果
useEffect(() => {
  function handleScroll(e) {
    // console.log("scrolling");測試用
    if (document.documentElement.scrollTop > 100) {
      document.querySelector('.goTop').style.display = 'block'; 
     } else{
       document.querySelector('.goTop').style.display = 'none';
     }
  }
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

//API 資料
// 初始值
useEffect(()=>{
    fetch( 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json',{method:"GET"})
      .then(res => res.json())
      .then(
        (data) => {
          //setState 要更新 state 狀態  
          setState({
            isLoaded: true,
            cards: data.result.records,
            cardsByZone:[],
            currentZone:'請選擇行政區',
            // 過濾重複的區域資料，並存在 itemZones 的新陣列中
            itemZones: data.result.records.map((item)=>(item.Zone)).filter(function(element, index, arr){
                return arr.indexOf(element) === index;
            })

          });
        },
        (sError) => {
          setState({
            isLoaded: true,
            error:sError,
            // cards:null
          });
        }
      )
},[]);

const getCurrentZone =(zone) =>{
    // console 第一個變數 'getCurrentZone' 代表是子層傳給父層撈到的值(第一個變數好辨認是哪邊產生的值)
    console.log('getCurrentZone',zone);
    
    // 1.fifter 篩選
    // 2.綁定 state >宣告變數給他一個空陣列

    // 在 getCurrentZone function 中，cardsByZone 在跑完 filter 狀態會改變
    setState({
        ...state, // keep 住當前的狀態 ask!
        currentZone:zone,
        // element 是一個物件，cardsByZone 是一個新陣列 物件
        cardsByZone: cards.filter(function(element){
            return element.Zone === zone;
        })

      });    
}

const scrollOnTop =(e)=>{
    document.documentElement.scrollTop =0;
    // console.log(e.target.scrollTop);
    // console.log('this is ontop');
    // console.log(document.documentElement.scroll);
    
    // if (document.documentElement.scrollTop > 100){
    //   let scrollTop = document.documentElement.scrollTop;
      
    //   return<div className="goTop" onClick={scrollOnTop} style={{display: (scrollTop> 100) ? "block" : "none"}}> <img src={gotopIcon}  alt="gotopIcon"/></div>
    // }
    
    // let scrollTop = document.documentElement.scrollTop;
      
    //  <div className="goTop" onClick={scrollOnTop} style={{display: (scrollTop> 100) ? "block" : "none"}}> <img src={gotopIcon}  alt="gotopIcon"/></div>
    // <div className="goTop" onClick={scrollOnTop} style={{display:(scrollTop ==0)?"none":"block"}}></div>
    // <div className={`goTop ${scrollTop===document.documentElement.scrollTop?"active":null}`}>此标签是否选中</div>
    
    //以下為 一般 JS 寫法
    // if (document.documentElement.scrollTop > 100) {
    //   document.querySelector('.goTop').style.display = 'block'; 
    //  } else{
    //    document.querySelector('.goTop').style.display = 'none';
    //  }
}
// const { cards } = state;
const { cards,itemZones,cardsByZone,currentZone,} = state;

 // Get current posts
 const indexOfLastPost = currentPage * postsPerPage;//我的理解是最後一頁
 const indexOfFirstPost = indexOfLastPost - postsPerPage;//我的理解是第一頁
 const currentCards = cardsByZone.slice(indexOfFirstPost, indexOfLastPost);//slice取得部分資料

 // Change page
 const paginate = pageNumber => setCurrentPage(pageNumber);
 //有點不懂

// Change page 我不太懂加上 className 的部分
// const paginate = (pageNumber,event) => {
//   setCurrentPage(pageNumber);
//   // console.log('test',event.target);
//   event.target.className ='page active';
//   let list = document.querySelectorAll('.page a');
//   list.forEach(element => {
//     if(element.textContent !==event.target.textContent){
//      element.className ='';
//     }
//      console.log(element);
//   });
 
// } 

return (
    <div className="App">
      <header className="banner">
        <div className="container">
            <h1>高雄旅遊資訊網</h1>
             {/*子傳父的值，定義規格 getZone ，且會觸發 getCurrentZone 函式， */}
            <Dropdown itemZones= {itemZones} getZone={getCurrentZone}/>
            {/* <select id="selectName">
          
            </select> */}
            <div className="menu">
                <p className="title-menu">熱門行政區</p>
                <ul className="buttonList">
                    <li><Buttons content="苓雅區" color="purple" getZone={getCurrentZone}/></li>
                    <li><Buttons content="三民區" color="orange" getZone={getCurrentZone}/></li>
                    <li><Buttons content="前鎮區" color="yellow" getZone={getCurrentZone}/></li>
                    <li><Buttons content="左營區" color="blue" getZone={getCurrentZone}/></li>
                </ul>
                {/* <input type="button" value="苓雅區" style={{background:'#8A82CC'}}/>
                <input type="button" value="三民區" style={{background:'#FFA782'}}/>
                <input type="button" value="新興區" style={{background:'#F5D105'}}/>
                <input type="button" value="鹽埕區" style={{background:'#559AC8'}}/> */}
            </div>
            <div className="icon-menu">
                <hr className="icon-menu-line"/>
            </div> 
        </div>
    </header>
    <div className="content container"> 
        <div className="main">
            {/* <h2 className="title-main">請選擇行政區</h2> */}
            <h2 className="title-main">{currentZone}</h2>
            <ul className="list">
                {/* 因為分頁所以要改成 currentCards ，有點不太懂*/}
            {currentCards.map(function(card){
                return<Card key={card.Id} item={card}/>
                  // 通常 map 要加上 key (固定值)

            })}

            {/* 測試用:先撈五筆卡片資料 */}
            {/* {cards.map(function(card,index){
                if(index<5)
                    return <Card item={card}/>
                else
                    return null
            })} */}

            {/* {cards.map((card) =>(
             <Card item={card}/>
            ))}  */}
            </ul>
        </div>

        <div className="goTop" onClick={scrollOnTop}>
            <img src={gotopIcon}  alt="gotopIcon"/>
        </div>
        
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={cardsByZone.length}
        paginate={paginate}
      />
        {/* <Pagination/> */}
        {/* <ul className="page">
           <li><a href="https://hackmd.io/xG1tw_nER7Wu3xL1gbGYPQ?both">Prev </a></li>
           <li><a href="#">1</a></li>
           <li><a href="#">2</a></li>
           <li><a href="#">Next</a></li>
        </ul> */}
    </div>
    
    <footer>
        <div className="container">
            <p>高雄旅遊網</p>
            <p className="pStyle">資料來源: 高雄市政府</p>
        </div>
    </footer>
    
</div>
  );
}

export default App;
