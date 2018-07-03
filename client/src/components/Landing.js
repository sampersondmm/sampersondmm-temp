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

        <Section title='Projects' color='rgb(100,100,100)'/>
        <Section title='Education' color='rgb(200,200,200)'/>
        <Section title='Blog' color='rgb(100,100,100)'/>

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
  render(){
    const color = {backgroundColor: this.props.color};
    return(
      <div style={Object.assign({}, section.main, color)}>
        <h1 style={section.header}>{this.props.title}</h1>
        <div style={section.sectionWrap}>
          <div style={section.section}>
            <div style={section.image}></div>
            <p style={section.description}></p>
          </div>
          <div style={section.section}>
            <div style={section.image}></div>
            <p style={section.description}></p>
          </div>
          <div style={section.section}>
            <div style={section.image}></div>
            <p style={section.description}></p>
          </div>
        </div>
        <NavLink exact to='/projects' style={button}>More</NavLink>
      </div>
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
    width:'80%',
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

const section = {
  main: {
    width:'100%',
    height:500,
    backgroundColor:'rgb(100,100,100)',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  header: {
    fontSize:'45px',
  },
  sectionWrap: {
    width:'80%',
    height:'50%',
    display:'flex',
    justifyContent:'space-between',
  },
  section: {
    width:'30%',
    height:'100%',
    border:'4px solid black',
    borderRadius:'5px',
    backgroundColor:'rgb(200,200,250)',
  }
};



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
