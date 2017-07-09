import React, { Component } from 'react';

const stylesheet = {
  modalContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 100,
    left: 0,
    top: 0
  },
  modalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    height: '100%',
    width: '100%'
  },
  modal: {
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    position: 'absolute',
    width: '75%',
    maxWidth: '800px',
    left: '50%',
    top: '50%',
    // height: '100%',
    overflow: 'auto'
  },
  close: {
    position: 'absolute',
    cursor: 'pointer',
    display: 'flex',
    height: '30px',
    width: '30px',
    right: 0,
    top: 0,
    zIndex: 101
  },
  closeSvg: {
    fill: '#000',
    margin: 'auto',
    height: '26px',
    width: '26px',
    marginRight: '3px'
  }
};

export default class ModalWrapper extends Component {

  render () {
    const { visible, close} = this.props;
    //- Build up the attributes
    const modalAttrs = {
      style: stylesheet.modal
    };

    if (window.screen.width < 500) {
      stylesheet.modal.top = '70%';
    }

    return (
      <div style={stylesheet.modalContainer} className={`${visible ? '' : 'hidden'}`}>
        <div style={stylesheet.modalBackground} onClick={close} />
        <article className='modal-container' {...modalAttrs}>
          <div className='close-modal-button' title='close' style={stylesheet.close} onClick={close}>
            <svg style={stylesheet.closeSvg} viewBox='0 0 25 25'>
              <title>Close</title>
              <path d='M 5 19 L 19 5 L 21 7 L 7 21 L 5 19 ZM 7 5 L 21 19 L 19 21 L 5 7 L 7 5 Z'></path>
            </svg>
          </div>
            <div className='wrapper-modal-container'>
              {this.props.children}
            </div>
        </article>
      </div>
    );
  }
}
