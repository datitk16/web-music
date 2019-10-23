import React, { Component } from 'react';
import './Header.css';
import {connect} from 'react-redux';
import {actSearchSong} from './../../action/index';
import {Link,withRouter} from 'react-router-dom'
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          nameOfSong:""
        };
      }
    componentWillMount(){
       
    }

    
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        this.props.searchNameOfSong(this.state)
        this.setState({
            nameOfSong:""
        })
        this.props.history.push("/result")
      };
     
      onChange = e => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
          [name]: value
        });
      };


    render() {
        let { nameOfSong } = this.state;
        return (
            <div className="header">
              <nav className="navbar navbar-expand-md myNav">
            <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#myMenu"
                aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
               
            <div className="collapse navbar-collapse" id="myMenu">
                <div className="logo"><img src={require('./../../images/logo.png')} /></div>
            
                <ul className="navbar-nav  mt-2 mt-lg-0 ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">HOME
                          
                            <div className="line">

                            </div>
                            <span className="sr-only">(current)</span>
                        </Link>

                    </li>
                    <li className="nav-item ">

                        <a className="nav-link text-success" href="#album">
                            ALBUMS
                          
                            <div className="line"></div>
                        </a>

                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#video">VIDEOS
                          
                            <div className="line"></div>
                            <span className="sr-only">(current)</span>
                        </a>

                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#event" >EVENTS
                            <span className="sr-only">(current)</span></a>

                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">CONTACT
                            <span className="sr-only">(current)</span></a>
                    </li>

                </ul>

            </div>
        </nav>
      
        <div id="mycarosel" className="carousel slide carousel-fade" data-ride="carousel">

            <div className="carousel-caption-text text-white text-center">
                <h1 className="display-4 ">Welcome to music theme demo</h1>
                <h5 className="lead">Search song!!!</h5>
                <form onSubmit={this.onSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="nameOfSong" value={nameOfSong} onChange={this.onChange} placeholder="Search song"/>
                        <div className="input-group-append">
                          
                            <button className="btn input-group-text btn_search " >Search</button>
                         
                            
                        </div>
                    </div>
                </form>
            </div>
           
        </div>
    </div>
        );
    }
}
const mapStateToProps=state=>{
    return{
        song:state.song
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        searchNameOfSong:(name)=>{
            dispatch(actSearchSong(name))
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (Header));