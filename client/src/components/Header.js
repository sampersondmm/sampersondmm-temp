import React, {Component} from 'react';
import Waypoint from 'react-waypoint'
// import '../css/Header.css';
import {Switch, Route, NavLink} from 'react-router-dom';



class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      headerColor: 'rgba(187,240,252,0)',
    }
    this.headerChange = this.headerChange.bind(this);
  }
  headerChange(e){
    this.setState({
      headerColor:'rgb(190,250,255)'
    })
  }
  render(){
    const navList = ['About','Projects','Experience','Blog'];
    return(
      <div style={{
        height: 70,
        width: '100%',
        display:'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        position:'fixed',
        zIndex:3,
        backgroundColor:this.state.headerColor,
      }} onClick={this.headerChange}>
        <div style={logoWrap}>
          <NavLink exact to={'/'} style={logoBoxWrap}>
            <div style={Object.assign({}, logoBox,logoBoxEach.eight)}></div>
            <div style={Object.assign({}, logoBox,logoBoxEach.seven)}></div>
            <div style={Object.assign({}, logoBox,logoBoxEach.six)}></div>
            <div style={Object.assign({}, logoBox,logoBoxEach.five)}></div>
            <div style={Object.assign({}, logoBox,logoBoxEach.four)}></div>
            <div style={Object.assign({}, logoBox,logoBoxEach.three)}></div>
            <div style={Object.assign({}, logoBox,logoBoxEach.two)}></div>
            <div style={Object.assign({}, logoBox,logoBoxEach.one)}></div>
          </NavLink>
          <NavLink exact to={'/'} style={text}>SP DEVELOPMENT</NavLink>
        </div>
        <Waypoint style={waypoint}/>
        <div style={nav}>
          {navList.map((element, index) => {
            return <li key={index}>
              <NavLink exact to={'/' + element.toLowerCase()} style={navLink}>{element}</NavLink>
            </li>
          })}
          <NavLink exact to='/contact' style={navContact}>Contact</NavLink>
        </div>

      </div>
    )
  }
}
const waypoint = {
  height:'20px',
  width:'20px',
  backgroundColor:'black',
  position:'absolute',
  top:'100px',
  left:'200px',
  zIndex:'5',
}
const header = {
  height: 70,
  width: '100%',
  display:'flex',
  justifyContent: 'space-between',
  alignItems:'center',
  position:'fixed',
  zIndex:3,
}
const nav = {
  display:'flex',
  alignItems: 'center',
  listStyle: 'none',
  transform:'translateY(100px)',
  opacity:0,
  marginRight:'5%',
  animation: 'fade-in-header 2s 0s forwards',
}
const navLink = {
  textDecoration:'none',
  color:'black',
  padding:'5px',
  margin:'3px',
  fontWeight:'lighter',
}
const navContact = {
  padding:'9px 15px',
  backgroundColor:'rgb(250,120,90)',
  color:'black',
  textDecoration:'none',
  borderRadius:'5px',
  border:'2px solid black',
}
const logoWrap = {
  display:'flex',
  marginLeft:'5%',
}
const logoBoxWrap = {
  animation: 'allBox 1.8s cubic-bezier(0.5, -0.5, 0.5, 1.5) forwards',
  transform: 'translateY(-1000px)',
  height:70,
  width:62,
}
const logoBox = {
  position:'absolute',
  top:5,
  left:21,
  height:'20px',
  width:'15px',
  backgroundColor:'rgb(100,100,100)',
  border:'2px solid black',
  borderRadius:'2px',
  transformOrigin:'50% 150%',
}
const logoBoxEach = {
  eight: {backgroundColor:'rgb(0,0,0)', animation: 'eight 2s 2s forwards'},
  seven: {backgroundColor:'rgb(40,40,40)', animation: 'seven 2s 2s forwards'},
  six: {backgroundColor:'rgb(80,80,80)', animation: 'six 2s 2s forwards'},
  five: {backgroundColor:'rgb(120,120,120)', animation: 'five 2s 2s forwards'},
  four: {backgroundColor:'rgb(160,160,160)', animation: 'four 2s 2s forwards'},
  three: {backgroundColor:'rgb(200,200,200)', animation: 'three 2s 2s forwards'},
  two: {backgroundColor:'rgb(240,240,240)', animation: 'two 2s 2s forwards'},
  one: {backgroundColor:'rgb(250,255,255)', animation: 'one 2s 2s forwards'},
}
const text = {
  fontSize:27,
  color:'black',
  textDecoration:'none',
  transform:'translateY(100px)',
  display:'flex',
  alignItems:'center',
  marginLeft:10,
  opacity:0,
  animation:'fade-in-header 2s 0s forwards',
  fontWeight:'lighter',
}

export default Header;
