import React, { Component } from 'react';
import { connect } from 'react-redux'
import ItemMusic from '../itemMusic/ItemMusic';


class Song extends Component {
    render() {
        var { song } = this.props;
        return (
            <div className="container mt-5">
                <div className="row">
                    <h2>Kết quả tìm kiếm cho từ khóa:</h2>
                    <div className="col-md-12">
                        {this.countResult(song)}
                      

                    </div>
                    <div className="footer-line"></div>
                    <div className="col-md-3">
                        <div>
                            <h3>Tất cả bài hát</h3>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <ul className="list-song list-song-suggest list-info-mw-780 z-list-song-duration">
                          
                          
                           {this.showItemSong(song)}
                         
                          
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    showItemSong=(song)=>{
        let result=null;
       
        if(song.resultCount>0){
           result=song.results.map((itemSong,index)=>{
               return  <ItemMusic
               itemSong={itemSong}
               key={index}
               index={index}
               />
           })
        }
        return result;
    }
    countResult=(song)=>{
        let result=null;
       
        if(song.resultCount>0){
         
               return    <p>Có {`${song.resultCount}`} kết quả được tìm thấy</p>
               
          
        }
        else{
            return    <p> Không có kết quả nào được tìm thấy </p>
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        song: state.song
    }
}
export default connect(mapStateToProps, null)(Song);