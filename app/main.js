'use strict';

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router';
/**
 * react路由
 */
class App extends React.Component{
    //加载组件后
    componentDidMount(){
        console.log('App did mount');
    }
    //离开组件后
    componentWillReceiveProps(){
        console.log('App will receive props');
    }
    //更新了组件
    componentDidUpdate(){
        console.log('App did update');
    }

    render(){
        return (
            <div>
                <div className="ui secondary pointing menu">
                    { /* 跳转路径   orderBy是查询符(http://localhost:3000/#/tv?orderBy=date&_k=zp7fmc) */}
                    <Link to="/" className="item">首页</Link>
                    <Link to="/tv" className="item" query={{orderBy: 'date'}}>电视</Link>
                </div>
                {this.props.children}
            </div>
        );
    }
}

class TV extends React.Component{
    constructor(props){
        super(props);

        //获取到路由的查询符
        let { query } = this.props.location;
        console.log(query);
    }
    componentDidMount(){
        console.log('TV did mount');
    }
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
    componentDidMount(){
        console.log('Home did mount');
    }
    //卸载了组件
    componentWillUnmount(){
        console.log('Home will unmount');
    }
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

function handleEnter(){
    console.log('进入');
}
function handleLeave(){
    console.log('离开');
}

/**
 * path 是指定路径
 * component 是路径对应渲染的组件
 * IndexRoute 如果App组件里的children未定义的时候，就会显示默认的组件
 * path="shows/:id" 如果在shows前面加上/ 就是使用绝对路径,可以不输入tv直接访问
 * Redirect 重定向
 * onEnter 进入这个路由的时候触发
 * onLeave 离开这个路由的时候触发
 */
ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="tv" component={TV}>
                <IndexRoute component={ShowIndex} />
                <Route path="/shows/:id" component={Show}
                    onEnter={handleEnter}
                    onLeave={handleLeave}
                />
                <Redirect from="shows/:id" to="/shows/:id" />
            </Route>       
        </Route>
    </Router>
), document.getElementById('app'));