import expect from 'expect';
import {createOlObject} from './olWrapper';
import ol from 'openlayers';

describe('Maps', () => {
    it('Creates a simple map object', () => {
        debugger;
        const actual = createOlObject({});
        expect(actual).toBeA(ol.Map);
    });

    it('uses the right target element', () => {
        const target = 'map',
            targetElement = document.createElement('div');
        targetElement.id = target;
        document.body.appendChild(targetElement);
        const map = createOlObject({
                target
            }),
            actual = map.getTargetElement();
        expect(actual).toBe(targetElement);
    });

    it('creates view', () => {
        const olClass = 'View',
            actual = createOlObject({
                olClass
            });
        expect(actual).toBeA(ol.View);
    });

    it('creates a view on a map', () => {
        const actual = createOlObject({
            view: {
                olClass: 'View'
            }
        });
        expect(actual.getView()).toBeA(ol.View);
    });

    it('creates a complicated map', () => {
        const config = {
                layers: [
                    {
                        olClass: 'layer.Tile',
                        source: {
                            olClass: 'source.XYZ',
                            url: 'http://server.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}.png',
                            attributions: [
                                'Source: Copyright:© 2013 National Geographic Society, i-cubed.'
                            ]
                        }
                    }
                ]
            },
            actual = createOlObject(config);
        expect(actual).toBeA(ol.Map);
    });
});