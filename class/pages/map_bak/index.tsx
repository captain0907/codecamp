import Head from "next/head";
import { useEffect } from "react";

const MapPage = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      // @ts-ignore
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    // @ts-ignore
    const map = new kakao.maps.Map(container, options);

    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: map.getCenter(),
    });
    // 지도에 마커를 표시합니다
    marker.setMap(map);

    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng;

      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);

      //   var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
      //   message += "경도는 " + latlng.getLng() + " 입니다";

      //   var resultDiv = document.getElementById("clickLatlng");
      //   resultDiv.innerHTML = message;
    });
  }, []);

  //   const onClickMap = () => {
  //     window.open(
  //       "https://map.kakao.com/link/map/37.402056,127.108212",
  //       "target: _blank"
  //     );
  //   };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=0f9dd6792d771cba5ed7211ca09f4b85"
        ></script>
      </Head>
      <div
        id="map"
        style={{ width: "500px", height: "400px" }}
        // onClick={onClickMap}
      />
      {/* <div id="clickLatlng"></div> */}
    </>
  );
};

export default MapPage;
