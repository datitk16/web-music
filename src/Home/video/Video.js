import React, { Component } from 'react';
import { Player } from 'video-react';
class Video extends Component {
    render() {
        return (
            <div>
                <section class="razo-trending-video-area section-padding-80-0 mb-50" id="video">
                    <div class="text-center">
                        <h1>TRENDING VIDEO</h1>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                            <iframe width="1280" height="720" src="https://www.youtube.com/embed/xyNNLWSnNPk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default Video;