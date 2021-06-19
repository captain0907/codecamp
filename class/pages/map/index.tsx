import Head from "next/head";
import { useEffect } from "react";

const MapPage = () => {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      // @ts-ignore
      center: new kakao.maps.LatLng(37.4853395187428, 126.90158554517127), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    // @ts-ignore
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 마커가 표시될 위치입니다
    // @ts-ignore
    var markerPosition = new kakao.maps.LatLng(
      37.4853395187428,
      126.90158554517127
    );

    // 마커를 생성합니다
    // @ts-ignore
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    //@ts-ignore
    // kakao.maps.event.addListener(map, "click", function (mouseEvent) {
    //   // 클릭한 위도, 경도 정보를 가져옵니다
    //   var latlng = mouseEvent.latLng;

    //   // 마커 위치를 클릭한 위치로 옮깁니다
    //   marker.setPosition(latlng);
    // });
  }, []);

  const onClickMap = () => {
    window.open(
      "https://map.kakao.com/link/map/37.4853395187428,126.90158554517127",
      "target:_blank"
    );
  };

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
        onClick={onClickMap}
      ></div>
    </>
  );
};

export default MapPage;
