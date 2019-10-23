import React, { Component } from 'react';
import Blog from '../blog/Blog';
import Video from '../video/Video';
import Event from '../event/Event';


class HomePage extends Component {
    render() {
        return (
            <div>
               
            <div id="intro"></div>
            
              <Blog/>
              <Video/>
             <Event/>
                
            </div>
        );
    }
}

export default HomePage;