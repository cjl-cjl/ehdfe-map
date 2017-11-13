import { Component } from 'react';
import LayoutHome from '../layouts/LayoutHome';
import './TransportationPage.less';
import image1 from '../images/ditulogo.png';
import image2 from '../images/ditu1.png';
import image3 from '../images/ditu.jpg';

class TransportationPage extends Component {
  render() {
    return (
      <LayoutHome {...this.props}>
        {/* <div className={"transport-header"}></div> */}
        <div className={"transport-block"}>
          <div className={"transport-content"}>
            <img src={image1} className={"transport-content-one"} />
            <p>lbs物流行业地图信息服务系统项目已申报国家高新技术补助，对于解决物流行业痛点问题，提高行业运输效率，降低行业成本，改善行业诚信问题都能起到很大的作用。网站的搭建，更是促进了项目的发展，是有效数据的来源入口，以及数据展示的平台。</p>
            {/* <ul className={"transport-ul"}>
              <li className={"transport-li-1"}>
                <strong>车辆派单</strong>
                <span>基于实时路况的精准时间预估服务（ETA），实现智能派单</span>
              </li>
            </ul> */}
          </div>
          <img src={image3} className={"transport-content-two"} />
        </div>
        {/* <div className={"transport-demo"}>
          <div className={"transport-demo-top"}>
            <h2>精准数据引导智慧出行</h2>
            <ul>
              
            </ul>
          </div>
        </div> */}
      </LayoutHome>
    );
  }
};

export default TransportationPage;
