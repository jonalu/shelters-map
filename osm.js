import Map from 'ol/Map';
import View from 'ol/view';
import OSM from 'ol/source/osm';
import Tile from 'ol/layer/tile';
import Vector from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
import Feature from 'ol/feature'
import GeoJSON from 'ol/format/geojson';
import { transform } from 'ol/proj';

const createMap = url =>
    new Map({
        target: 'map',
        layers: [
            new Tile({
                source: new OSM()
            }),
            new Vector({
                source: new VectorSource({
                    url,
                    format: new GeoJSON()
                })
            })
        ],
        view: new View({
            center: [0, 0],
            zoom: 4
        })
    });

const centerMap = (map) => {
    map.getView().setCenter(transform([15, 65], 'EPSG:4326', 'EPSG:3857'));
};

export default {
    createMap,
    centerMap
};