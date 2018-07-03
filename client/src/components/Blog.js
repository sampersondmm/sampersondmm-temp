import React, {Component} from 'react';

class Blog extends Component {
  render(){
    return(
      <div style={wrap}>
        <div style={main}>
          <Article title='First Article!' />
          <Article title='Second Article!' />
          <Article title='Third Article!' />
        </div>
        <div style={side}>
          <h2 style={header}>More Articles</h2>
          <div style={preview}></div>
          <div style={preview}></div>
          <div style={preview}></div>
        </div>
      </div>
    );
  }
}
class Article extends Component {
  constructor(props){
    super(props);
  };
  render(){
    return(
      <div style={article}>
        <h1 style={header}>{this.props.title}</h1>
        <p style={text}>Our Father, who art in heaven, hallowed be thy name. Thy kingdom come, thy will be done, on earth as it is in heaven. Give us this day our daily bread and forgive us our trespasses as we forgive those who treaspass against us, and lead us not into temptation but deliver us from evil. Amen<br/>
        Our Father, who art in heaven, hallowed be thy name. Thy kingdom come, thy will be done, on earth as it is in heaven. Give us this day our daily bread and forgive us our trespasses as we forgive those who treaspass against us, and lead us not into temptation but deliver us from evil Amen
        Our Father, who art in heaven, hallowed be thy name. Thy kingdom come, thy will be done, on earth as it is in heaven. Give us this day our daily bread and forgive us our trespasses as we forgive those who treaspass against us, and lead us not into temptation but deliver us from evil Amen
        </p>
        <p style={text}>Our Father, who art in heaven, hallowed be thy name. Thy kingdom come, thy will be done, on earth as it is in heaven. Give us this day our daily bread and forgive us our trespasses as we forgive those who treaspass against us, and lead us not into temptation but deliver us from evil. Amen<br/>
        Our Father, who art in heaven, hallowed be thy name. Thy kingdom come, thy will be done, on earth as it is in heaven. Give us this day our daily bread and forgive us our trespasses as we forgive those who treaspass against us, and lead us not into temptation but deliver us from evil Amen
        Our Father, who art in heaven, hallowed be thy name. Thy kingdom come, thy will be done, on earth as it is in heaven. Give us this day our daily bread and forgive us our trespasses as we forgive those who treaspass against us, and lead us not into temptation but deliver us from evil Amen
        </p>
        <p style={text}>Our Father, who art in heaven, hallowed be thy name. Thy kingdom come, thy will be done, on earth as it is in heaven. Give us this day our daily bread and forgive us our trespasses as we forgive those who treaspass against us, and lead us not into temptation but deliver us from evil. Amen<br/>
        Our Father, who art in heaven, hallowed be thy name. Thy kingdom come, thy will be done, on earth as it is in heaven. Give us this day our daily bread and forgive us our trespasses as we forgive those who treaspass against us, and lead us not into temptation but deliver us from evil Amen
        Our Father, who art in heaven, hallowed be thy name. Thy kingdom come, thy will be done, on earth as it is in heaven. Give us this day our daily bread and forgive us our trespasses as we forgive those who treaspass against us, and lead us not into temptation but deliver us from evil Amen
        </p>
      </div>
    );
  }
}


const wrap = {
  display:'flex',
  justifyContent:'center',
  backgroundColor:'rgb(220,220,220)',
  paddingTop:'140px'
}

const main = {
  padding:'20px',
  width:'60%',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
}
const article = {
  padding:'30px',
  backgroundColor:'white',
  margin:'20px 0'
}
const text = {
  padding:'10px'
}
const header = {
  fontSize:'30px',
  margin:'20px 0'
}

const side = {
  width:'30%',
  display:'flex',
  flexDirection:'column',
  alignItems:'center'
}

const preview = {
  width:'90%',
  height:'300px',
  margin:'10px 0px',
  border:'2px solid black',
  backgroundColor:'white',
}

export default Blog;
