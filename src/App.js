import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.mapElement = React.createRef();
  }

  componentDidMount() {
    const { naver } = window;
    if (!this.mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.55277528613448, 126.96812020347149);
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(this.mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3595704, 127.105399),
      map,
    });
  }

  render() {
    return <div ref={this.mapElement} style={{ minHeight: '400px' }} />;
  }
}

export default App;
