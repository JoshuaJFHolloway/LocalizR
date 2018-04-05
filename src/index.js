import React from 'react';
import { render } from 'react-dom';
// import CommentBox from './CommentBox';
import App from './components/App';


render(<App />, document.getElementById('root'));

// render(
//     <CommentBox
//         url="http://localhost:3001/api/comments"
//         pollInterval={2000} />,
//     document.getElementById('root')
// );
