import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../css/Keyframes.css';

class Landing extends Component {
  render(){
    return(
      <div>
        <div style={intro.main}>
          <img style={intro.img} src='spdevFancyGlow.png'></img>
          <div style={intro.textBox}>
            <h2 style={intro.text}>SP DEVELOPMENT</h2>
            <h3 style={intro.subText1}>Full-Stack Development</h3>
            <h3 style={intro.subText2}>Animation</h3>
            <h3 style={intro.subText3}>Design</h3>
          </div>
        </div>
        <div style={about.main}>
          <img style={about.img} src='wave.png'></img>
          <div style={about.wrap}>
            <div style={about.image}></div>
            <div style={about.textWrap}>
              <h1 style={about.header}>About Sam</h1>
              <p style={about.text}>I believe in God the Father almight, creator of heaven and earth. I believe in Jesus Christ his only son, our Lord. Who was concieved by the power of the holy spirit and born of the virgin Mary. He suffered under Pontius Pilot, he was crucified, died and was buried. He descended into hell and on the third day he rose again. He ascended into heaven and is seated at the right hand of God the Father almight. From thence he shall come to judge the living and the dead. I believe in the holy spirit, in the holy catholic church, in the communion of saints, in the forgiveness of sin, in the ressurection of the body, and in the life everlasting. Amen.</p>
            </div>
          </div>
        </div>

        <Section
          title='Projects'
          backgroundColor='rgb(100,100,100)'
        />

        <Section title='Education' backgroundColor='rgb(200,200,200)' image=''/>
        <Section title='Blog' backgroundColor='rgb(100,100,100)' image=''/>

        <div style={contact}>
          <div className='img'></div>
          <div className='text'></div>
        </div>
        <div style={footer}>
        </div>
      </div>
    );
  }
}

class Section extends Component {
  constructor(props){
    super(props);
  };
  sortItems(style){
    if(this.props.title === 'Projects'){
      return (
        <div style={style.wrap}>
          <Item
            section='projects'
            image='cssArt.png'
            header='Box Canvas'
            text='A program that allows you to create art with css shapes using nothing but your keyboard'
          />
          <Item
            section='projects'
            image='cssArt.png'
            header='Box Canvas'
            text='A program that allows you to create art with css shapes using nothing but your keyboard'
          />
        </div>
      );
    }
  }
  render(){
    const style = {
      main: {
        width:'100%',
        height:500,
        backgroundColor:this.props.backgroundColor,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
      },
      header: {
        fontSize:'45px',
      },
      wrap: {
        width:'85%',
        height:'50%',
        display:'flex',
        justifyContent:'space-between',
      }
    }
    return(
      <div style={style.main}>
        <h1 style={style.header}>{this.props.title}</h1>
        {this.sortItems(style)}
        <NavLink exact to='/projects' style={button}>More</NavLink>
      </div>
    );
  }
}

class Item extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const style = {
      section: {
        width:'30%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
      },
      header: {
        fontSize:'23px',
        marginBottom:'10px',
        color:'black',
      },
      image: {
        width:'100%',
        border:'4px solid black',
        borderRadius:'5px',
        position:'relative',
        zIndex:2,
      },
      text: {
        color:'black',
      },
      description: {
        marginTop:'-5px',
        width:'110%',
        backgroundColor:'rgb(220,220,220)',
        padding:'15px',
        borderRadius:'5px',
      }
    }
    return(
      <NavLink exact to={'/' + this.props.section} style={{textDecoration:'none'}}>
        <div style={style.section}>
          <img src={this.props.image} style={style.image}></img>
          <div style={style.description}>
            <h4 style={style.header}>{this.props.header}</h4>
            <p style={style.text}>{this.props.text}</p>
          </div>
        </div>
      </NavLink>
    );
  }
}

const intro = {
  main: {
    height:'700px',
    width:'100%',
    background:'linear-gradient(rgb(187,240,252), rgb(100,150,220))',
    overflow:'hidden',
    display:'flex',
  },
  textBox: {
    position:'absolute',
    right:50,
    zIndex:2,
    opacity:0,
    top:150,
    transform:'translateY(300px)',
    animation:'text 2s 0s forwards'
  },
  text: {
    fontWeight:'lighter',
    fontSize:40,
  },
  img: {
    marginTop:'-50px',
    opacity:0,
    animation: 'fade-in-image 2s 0s forwards',
  },
  subText1: {
    fontWeight:'lighter',
    marginTop:10,
    marginLeft:30,
    fontSize: '23px',
  },
  subText2: {
    fontWeight:'lighter',
    marginTop:10,
    marginLeft:60,
    fontSize: '23px',
  },
  subText3: {
    fontWeight:'lighter',
    marginTop:10,
    marginLeft:90,
    fontSize: '23px',
  }
}

const about = {
  main: {
    width:'100%',
    height:500,
    backgroundColor:'rgb(200,200,200)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
  },
  img: {
    width:'100%',
    position:'absolute',
    bottom:0,
    height:300,
  },
  wrap: {
    height:'90%',
    width:'85%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    position:'relative',
    zIndex:2,
  },
  image: {
    height:'400px',
    width:'400px',
    border:'4px solid black',
    backgroundColor:'rgb(220,220,220)',
    borderRadius:'50%',
  },
  textWrap: {
    height:'90%',
    width:'50%',
  },
  header: {
    height:'30%',
    width:'100%',
    fontSize:'45px',
    display:'flex',
    paddingLeft:'50px',
    alignItems:'center',
  },
  text: {
    height:'70%',
    width:'100%',
    padding:'20px',
  }
};

const button = {
  padding:'9px 15px',
  backgroundColor:'rgb(250,120,90)',
  color:'black',
  textDecoration:'none',
  borderRadius:'5px',
  border:'2px solid black',
}





const contact = {
  width:'100%',
  height:500,
  backgroundColor:'rgb(200,200,200)'
}

const footer = {
  width:'100%',
  height:200,
  backgroundColor:'rgb(50,50,50)'
}

export default Landing;
