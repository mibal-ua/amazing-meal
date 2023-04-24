import React, {FC, useEffect, useRef} from "react";
import Hls from 'hls.js';
import {useDispatch} from "react-redux";

export interface VideoPlayerProps {
    source: string,
}

const VideoPlayer: FC<VideoPlayerProps> = ({source}) => {
    source = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'; // because of YouTube CORS politics
    const hls = new Hls();
    const videoEl = React.useRef<HTMLVideoElement>(null);
    React.useEffect(() => {
        if (videoEl.current) {
            hls.attachMedia(videoEl.current);
            hls.on(Hls.Events.MEDIA_ATTACHED, () => {
                hls.loadSource(source);
            });
        }
    }, [hls, source]);

    return (
            <video
                controls={true}
                ref={videoEl}
                autoPlay={false}
                muted={true}
            />
    );
};

export default VideoPlayer;
