import osm from './osm';

const map = osm.createMap('https://raw.githubusercontent.com/dsb-norge/static-share/master/shelters.json');

osm.centerMap(map);