import React, {FC} from 'react';
import Hls from 'hls.js';
import {videoPlayer} from '@/components/common/VideoPlayer/VideoPlayer.styles';
import {Box} from '@mui/material';

interface VideoPlayerProps {
    source: string,
}

const VideoPlayer: FC<VideoPlayerProps> = ({source}) => {
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

    source = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'; // because of YouTube CORS politics
    return (
        <Box sx={videoPlayer}>
            <video
                width={'100%'}
                controls={true}
                ref={videoEl}
                autoPlay={false}
            />
        </Box>
    );
};

export default VideoPlayer;
