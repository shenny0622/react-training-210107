import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="page">
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={(e) => paginate(number,e.preventDefault())} href='!#'>
              {number}
              {/* e.preventDefault() 取消 a 連結的預設行為 */}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
//下方為 BS 樣式版本
// import React from 'react';

// const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className='pagination'>
//         {pageNumbers.map(number => (
//           <li key={number} className='page-item'>
//             <a onClick={(e) => paginate(number,e.preventDefault())} href='!#' className='page-link'>
//               {number}
//               {/* e.preventDefault() 取消 a 連結的預設行為 */}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;



// import React, { Component } from 'react';

// const Pagination =() =>{
//   return (
//     <div>
//         <ul className="page">
//            <li><a href="https://hackmd.io/xG1tw_nER7Wu3xL1gbGYPQ?both">Prev </a></li>
//            <li><a href="#">1</a></li>
//            <li><a href="#">2</a></li>
//            <li><a href="#">Next</a></li>
//         </ul>
        
//     </div>
// );

// };

// export default Pagination;

// //以上是之前寫的分頁


// material-ui
// import React from 'react';
// import { MemoryRouter, Route } from 'react-router';
// import { Link } from 'react-router-dom';
// import Pagination from '@material-ui/lab/Pagination';
// import PaginationItem from '@material-ui/lab/PaginationItem';

// export default function PaginationLink() {
//   return (
//     <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
//       <Route>
//         {({ location }) => {
//           const query = new URLSearchParams(location.search);
//           const page = parseInt(query.get('page') || '1', 3);
//           return (
//             <Pagination
//               page={page}
//               count={3}
//               renderItem={(item) => (
//                 <PaginationItem
//                   component={Link}
//                   to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
//                   {...item}
//                 />
//               )}
//             />
//           );
//         }}
//       </Route>
//     </MemoryRouter>
//   );
// }
