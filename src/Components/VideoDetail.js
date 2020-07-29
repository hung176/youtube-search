import React, { Component } from 'react';
import { YoutubeOutlined } from "@ant-design/icons";

class VideoDetail extends Component {
    state = {
        video: null
    };

    componentDidUpdate(prevProps) {
        if( this.props.video && ( prevProps.video !== this.props.video)  ) {
            this.setState({ video: this.props.video })
        }
    }

    render() {
        const video = this.state.video;

        if( !video ) {
            return (
                <div >
                    <p style={{"marginTop":"50px"}}>Enter some text to searching...</p>
                </div>
            )
        }

        const videoId = video.id.videoId;
        const url = `https://www.youtube.com/embed/${ videoId }`;

        return (
            <div>
                <div className={"embed-responsive embed-responsive-16by9"}>
                    <iframe title={ video.snippet.title }  src={url} allowFullScreen />
                </div>
                <div>
                    <h2>
                        { video.snippet.title }
                    </h2>
                    <div>
                        { video.snippet.description }
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoDetail;