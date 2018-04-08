import React from 'react'
import { render } from 'react-dom'
import Routes from './routes';
// import App from './components/App'

render(
  <Routes />,
    document.getElementById('root')
);

// render(
//     <CommentBox
//         url="http://localhost:3001/api/comments"
//         pollInterval={2000} />,
//     document.getElementById('root')
// );
