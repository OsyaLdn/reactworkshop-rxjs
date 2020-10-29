import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { INITIAL_VIEWPORT, TOKEN } from './constants';
import MarkerItem from '../MarkerItem';
import MAP_STYLE from './styles.json';
import markersStore from '../../store/markers';
import useRxStore from '../../hooks';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);
  const data = useRxStore(markersStore, markersStore.INITIAL_STATE);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={TOKEN}
      onViewportChange={setViewport}
      mapStyle={MAP_STYLE}
    > 
      {data.markers.map(marker => (
        <MarkerItem key={marker.id} marker={marker} />
      ))}
    </ReactMapGL>
  );
};

export default Map;