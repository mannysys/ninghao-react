'use strict';

import React from 'react';

class CommentForm extends React.Component{

    handleSubmit(event){
        //去掉这个事件默认要做的事
        event.preventDefault();  
        //获取到提交表单的值
        let author = this.refs.author.value,
            text = this.refs.text.value;

        this.props.onCommentSubmit({author, text, date: '刚刚'});
    }
    // onSubmit表单提交事件
    render(){
        return (
            <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                    <input type="text" placeholder="姓名" ref="author" />
                </div>
                <div className="field">
                    <textarea placeholder="评论" ref="text"></textarea>
                </div>
                <button type="submit" className="ui blue button">
                    添加评论
                </button>    
            </form>
        );
    }


}

export { CommentForm as default };