import React from 'react';
import Comment from './Comment';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div className='comments-wrapper'>
    {/* Map through the comments prop and render a Comment component for every comment object */}
   {
   comments.map(comm => <Comment comment={comm} key={comm.id} />)
   } 
   </div>
  );
};

export default Comments;
