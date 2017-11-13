import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Map extends Component {
  static defaultProps = {
    width: '500px',
    height: '500px',
    minZoom: 5,
    maxZoom: 16,
    zoom: 13,
    center: [120.219375416, 30.2592444615], //杭州
  }
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    minZoom: PropTypes.number,
    maxZoom: PropTypes.number,
    zoom: PropTypes.number,
    center: PropTypes.arrayOf(PropTypes.number),
    onChange: PropTypes.func,
  }
  componentDidMount() {
    const { zoom, minZoom, maxZoom, center, onChange } = this.props;
    this.mapInstance = new BMap.Map(this.el, {
      minZoom,
      maxZoom,
    });
    this.mapInstance.enableScrollWheelZoom();
    this.mapInstance.addControl(new BMap.NavigationControl());
    const point = new BMap.Point(...center);
    this.mapInstance.centerAndZoom(point, zoom);

    if(onChange){
      onChange(this.mapInstance);
    };
  }
  render() {
    const { width, height } = this.props;
    const props = {
      ref: node => this.el = node,
      style: {
        width,
        height,
      },
    };
    return <div {...props}></div>
  }
}