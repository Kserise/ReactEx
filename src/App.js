import React, { Component } from 'react';
import Subject from "./component/Subject";
import Gnb from "./component/Gnb";
import Article from "./component/Article";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:"read",
      subject:{title:"Web", sub:"world wide webb!"},
      welcome:{title:'welcome', desc:'hello,React!!!' },
      gnb:[
        {id:1, title:"html", desc:"html is hypertext markup languege"},
        {id:2, title:"css", desc:"css is design"},
        {id:3, title:"javascript", desc:"js is interactive"}
      ]
    }
  }
  render() {

    console.log('app render');
    var _title, _desc = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.gnb[0].title;
      _desc = this.state.gnb[0].desc;
    }
    console.log('render', this);
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({
              mode:"welcome"
            })
          }.bind(this)}
        >
        </Subject>
        <Gnb data={this.state.gnb}></Gnb>
        <Article title={_title} sub={_desc}></Article>
      </div>
    );
  }
}

export default App;