'use strict';

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';

class App extends React.Component{
    render(){
        return (
            <div>
                <div className="ui secondary pointing menu">
                    { /* 跳转路径 */}
                    <Link to="/" className="item">首页</Link>
                    <Link to="/tv" className="item">电视</Link>
                </div>
                {this.props.children}
            </div>
        );
    }
}

class TV extends React.Component{
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

class Show extends React.Component{
    constructor(props){
        super(props);

    }
    // this.props.params可以获取到路径url传参数值
    render(){
        return (
            <h3>节目 {this.props.params.id}</h3>
        );
    }
}

class Home extends React.Component{
    render(){
        return (
            <div className="ui info message">首页内容</div>
        );
    }
}
class ShowIndex extends React.Component{
    render(){
        return (
            <div className="ui info message">电视节目列表</div>
        );
    }
}
/**
 * path 是指定路径
 * component 是路径对应渲染的组件
 * IndexRoute 如果App组件里的children未定义的时候，就会显示默认的组件
 */
ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="tv" component={TV}>
                <IndexRoute component={ShowIndex} />
                <Route path="shows/:id" component={Show}/>
            </Route>       
        </Route>
    </Router>
), document.getElementById('app'));