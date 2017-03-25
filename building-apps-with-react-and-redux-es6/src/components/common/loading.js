/* eslint-disable react/no-did-mount-set-state */
// Warning for putting setState in componentDidMount

import React, { PropTypes } from 'react';

class Loading extends React.Component {

  constructor( props, context ) {
    super(props, context);

    this.state = {
      frame: 1
    };
  }

  componentDidMount(){

    this.interval = setInterval(()=>{
      this.setState(
        {
          frame: this.state.frame + 1
        }
      );
    }, this.props.interval);

  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    //dots count all the way to 20 based on how quickly the frame is increasing set by the interval
    //then add the dot to TEXT
    let dots = this.state.frame % (this.props.dots + 1);
    let text = '';

    //while dots are greater than 0 keep adding a dot
    //subtracting the dots must keep them from counting to infinity I think
    while( dots > 0 ){
      text += '.';
      dots--;
    }

    return (
      <span {...this.props}>{text}&nbsp;</span>
    );
  }
}

Loading.defaultProps = {
  interval: 300,
  dots: 3
};

Loading.propTypes = {
  interval: PropTypes.number,
  dots: PropTypes.number
};

export default Loading;