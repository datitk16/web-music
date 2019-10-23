import React, { Component } from 'react';

class ItemMusic extends Component {
    render() {
        var { itemSong } = this.props;
        console.log(itemSong)
        return (
            <div className="row">
                <li className="bor-bottom  false false false">
                    <div className="z-card card-40">
                        <a className="thumb-40">
                            <img className="item-song" src={`${itemSong.artworkUrl60}`} />
                            <img className="play-song" src={require('./../../images/play.png')} />
                        </a>
                        <div className="card-info">
                            <div className="title">
                                 <a href={`${itemSong.trackViewUrl}`} className="tile-song">{`${itemSong.collectionCensoredName}`}</a>
                            </div>
                            <div className="artist">
                            </div>
                        </div>
                        <div className="extension">
                            <a title="Thêm vào danh sách phát">
                                <img className="" src={require('./../../images/add.png')} />
                            </a>
                         
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                    <div className="cover"></div>
                    <div className="clear"></div>

                </li>
            </div>

        );
    }
}

export default ItemMusic;