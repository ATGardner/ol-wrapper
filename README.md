**ol-wrapper**

A simple package that enables creating OpenLayers 3 objects using a nested config object, instead of multiple constructor calls.

_Example_:
instead of

```javascript
const map = new ol.Map({
    target: 'map-div',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'http://some.wmtsserver.com/{z}/{y}/{x}.png'
            })
        })
    ]
});
```

you can write
```javascript
const map = olWrapper.createOlObject({
    olClass: 'Map', //can be emitted, 'Map' is the default
    layers: [
        {
            olClass: 'layer.Tile',
            source: {
                olClass: 'source.XYZ',
                url: 'http://some.wmtsserver.com/{z}/{y}/{x}.png'
            }
        }
    ]
});
```

Can be useful for saving map definitions in JSON objects.

Currently only with basic functionality, nothing is added over the OpenLayers 3 API.

**Usage**:

either add
```html
<script src="https://unpkg.com/ol-wrapper/dist/ol-wrapper.min.js" type="text/javascript"></script>
```
or use browserify/webpack with
```javascript
//es5
var createOlObject = require('ol-wrapper').createOlObject;

//es6
import {createOlObject} from 'ol-wrapper';
```