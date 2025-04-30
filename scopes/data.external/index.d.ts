declare namespace data {
        /**
         * Creates a new request to fetch the Smartconext data
         * The response is then returned under the onSmartconextDataChanged subscription
         *
         */
        function requestSmartconextData(
              projectId: number,
            latitude: number,
            longtitude: number,
            radius: number
        ): void;

        /**
         * Closes the layer with the Smartconext data
         */
        function closeSmartconextData(
        ): void;

        /**
         * Subscribe to get Smartconext data
         * 
         * Example data:
         * [
         * {
         *  "id": "document",
         *  "name": "simple",
         *  "version": "1.0"
         * },
         * {
         *  "id": "23302a89ea0123373e2f9cec4c380e1254dbaacf",
         *  "name": "Neubau Carport",
         *  "description": "Neubau Carport",
         *  "position": {
         *    "cartographicDegrees": [8.8434589, 47.4196053, 10]
         *  },
         *  "billboard": {
         *    "eyeOffset": {
         *      "cartesian": [0, 0, 0]
         *    },
         *    "horizontalOrigin": "CENTER",
         *    "scale": 0.5,
         *    "verticalOrigin": "BOTTOM",
         *    "heightReference": "RELATIVE_TO_GROUND",
         *    "disableDepthTestDistance": 1000,
         *    "scaleByDistance": {
         *      "nearFarScalar": [1.0, 2.0, 5000.0, 0.5]
         *    },
         *    "translucencyByDistance": {
         *      "nearFarScalar": [5000.0, 1.0, 10000.0, 0.0]
         *    },
         *    "pixelOffsetScaleByDistance": {
         *      "nearFarScalar": [1.0, 20.0, 10000.0, 30.0]
         *    },
         *    "image": {
         *      "reference": "smartconext_marker01#billboard.image"
         *    },
         *    "pixelOffset": {
         *      "cartesian2": [0, 0]
         *    }
         *  },
         *  "properties": {
         *    "object_info": {
         *     "name": "Neubau Carport",
         *      "price": "weniger als 100 Tsd. CHF",
         *      "planningStage": "new"
         *    },
         *    "luucy_actions": {
         *      "select_action": "open_html_info",
         *      "select_action_params": {
         *        "content": "<p><b>Name</b><br/>Neubau Carport</p><p><b>Beschreibung</b><br/>Neubau Carport</p>"
         *      }
         *    }
         *  }
         * }
         * ]
         * 
         */
        const onSmartconextDataChanged: Event<string>;
}
