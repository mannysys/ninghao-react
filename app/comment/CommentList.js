'use strict';

import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component{

    render(){
        let keyid = 0;
        let commentNodes = this.props.data.map(comment => {
            return (
                <Comment key={keyid++} author={comment.author} date={comment.date}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div>
                {commentNodes}
            </div>
        );
    }


}

export { CommentList as default };
