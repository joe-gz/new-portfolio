import React, { Component } from 'react';
import Wrapper from './Wrapper';

class VideoModal extends Component {
  render() {
    let width = 700;
    let height = 500;
    if (window.innerWidth < 968 && window.innerWidth > 825) {
      width = 600;
      height = 400;
    } else if (window.innerWidth < 825 && window.innerWidth > 698) {
      width = 500;
      height = 400;
    } else if (window.innerWidth < 698 && window.innerWidth > 560) {
      width = 400;
      height = 300;
    } else if (window.innerWidth < 560) {
      width = 275;
      height = 200;
    }

    return (
      <Wrapper visible={this.props.visible} close={this.props.close}>
        <div>
          <video controls='controls' width={width} height={height} name='Soundburst' src='https://s3.amazonaws.com/joegz.com/s3-images/soundburst.mov'></video>
        </div>
      </Wrapper>
    );
  }
}

export default VideoModal;
