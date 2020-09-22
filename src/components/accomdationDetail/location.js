import React from 'react';
import {
  RenderAfterNavermapsLoaded,
  NaverMap,
  Marker,
} from 'react-naver-maps';
import styled from 'styled-components';

import { NAVER_GEOCODE_API } from '../../constants';
import markerSVG from '../../assets/images/map-marker-alt-solid.svg';
import searchLocationSVG from '../../assets/images/search-location.svg';
import loadingGIF from '../../assets/images/loading.gif';

const LocationWrapper = styled.div`
  padding: 0.5rem;
  font-size: 16px;
  font-weight: 800;
`;

const LocationImage = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;

const Map = ({ location }) => {
  return (
    <div>
      <RenderAfterNavermapsLoaded
        ncpClientId={NAVER_GEOCODE_API.API_KEY_ID}
      >
        <NaverMap
          mapDivId={'maps-getting-started-uncontrolled'}
          style={{ width: '100%', height: '200px' }}
          defaultCenter={{
            lat: location.lat,
            lng: location.lng,
          }}
          loading={loadingGIF}
        >
          <Marker
            position={{
              lat: location.lat,
              lng: location.lng,
            }}
            icon={{
              url: markerSVG,
              size: { width: 24, height: 32 },
              scaledSize: { width: 24, height: 32 },
              anchor: { x: 12, y: 32 },
            }}
          />
        </NaverMap>
        <LocationWrapper>
          <LocationImage
            src={searchLocationSVG}
            alt="위치 아이콘"
          />
          {location.address}
        </LocationWrapper>
      </RenderAfterNavermapsLoaded>
    </div>
  );
};

export default Map;
