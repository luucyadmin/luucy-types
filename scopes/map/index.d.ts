/// <reference path="colored-area.d.ts" />
/// <reference path="element.d.ts" />
/// <reference path="line.d.ts" />
/// <reference path="marker.d.ts" />
/// <reference path="polygon.d.ts" />
/// <reference path="label.d.ts" />
/// <reference path="building.d.ts" />

/**
 * Interactions with luucys main map.
 *
 * @example // Creating a marker and a button to focus it
 * const marker = new map.Marker(new GlobalPosition(47.0469494, 8.3157369));
 *
 * section.add(new ui.Button(ui.icons.pointOfInterest, "Focus Marker", () => {
 *     marker.focus();
 * }));
 */
declare namespace map {
    /**
     * Focuses multiple elements at once. The map will zoom out to try to show all elements at once.
     *
     * Do not focus a element without any user interaction!
     */
    function focus(
        elements: (
            | ColoredArea
            | Line
            | Marker
            | Polygon
            | GlobalPosition
            | Label
            | Building
        )[]
    ): void;

    /**
     * On Position Select
     *
     * The event will be emitted when the user clicks somewhere on the map.
     *
     * @example // Add a marker where the user clicked
     * map.onPositionSelect.subscribe(position => {
     *     new map.Marker(position.flattenedCopy(), Color.random());
     * });
     */
    const onPositionSelect: Event<GlobalPosition>;

    /**
     * On Parcel Select
     *
     * The event will be emitted when the user clicks on the parcel layer (PPR) and provide parcels detail in the response.
     * In the future the user will be able to select multiple parcels at the time.
     * For now the list will contain only one record -> it has to be selected on the default index.
     *
     * @example // Add a lable with parcel info where the user clicked
     * map.onParcelSelect.subscribe(parcels => {
     *     new ui.Label("Selected parcel: "+ parcel[0].id);
     * });
     */
    const onParcelSelect: Event<ParcelInfo[]>;

    /**
     * Returns buffered polygon points if succeeded, undefined if failed (can occur when buffer distance < 0 -> buffering inside so that the new polygon intersects with itself)
     *
     * @returns array of global position for each polygon (in case of intersection the provided points may be transformed to two separated polygons hence the array response).
     * For most of the cases the response will be array having the length of 1
     *
     * @example
     * const buffer = map.bufferPolygon([
     *     new GlobalPosition(47.050390, 8.310263),
     *     new GlobalPosition(47.050390, 8.311263),
     *     new GlobalPosition(47.051390, 8.311263),
     *     new GlobalPosition(47.051390, 8.310263),
     * ], 5, 10);
     *
     * const polyfon = buffer[0];
     */
    function bufferPolygon(
        points: GlobalPosition[],
        bufferDistance: number,
        areaScaleFactor: number
    ): GlobalPosition[][] | undefined;

    /**
     * Generates a polygon based on the provided data
     * 
     * 
     * @example
     * const polygon = map.generatePolygon([
     *      new GlobalPosition(47.050390, 8.310263),
     *     new GlobalPosition(47.050390, 8.311263),
     *     new GlobalPosition(47.051390, 8.311263),
     *     new GlobalPosition(47.051390, 8.310263)],
     *    10,0.9,1,40, Color.red, Color.blue);
     * 
     * @param points original parcel/area points
     * @param borderDistance distance from parcel/area border (m)
     * @param areaReduction reduction of the original area (%)
     * @param coverageRatio percentage of how much area should be covered by polygon (%)
     * @param maxTotalHeight maximum polygon height (m)
     * @param color polygon color
     * @param border polygon border color
     */
    function generatePolygon(
        points: GlobalPosition[],
        borderDistance: number,
        areaReduction: number,
        coverageRation: number,
        maxTotalHeight: number,
        color?: Color, 
        border?: { color: Color, width?: number } | Color
    ): Polygon | undefined;

    class ParcelInfo {
        /**
         * Parcel name
         */
        name: string;
        /**
         * Parcel type
         */
        type: string;
        /**
         * Parcel identifier
         */
        id: number;
        /**
         * Parcel geometry JSON (geojson.Geometry)
         * @example
         *   geometry: {
         *     type: "Polygon",
         *     coordinates: [
         *       [
         *         [2666167.8, 1211369.6],
         *         [2666167.8, 1211370.2],
         *         [2666167.8, 1211370.9],
         *         [2666167.8, 1211371.6],
         *         [2666167.8, 1211372.2],
         *         [2666167.8, 1211372.9],
         *         [2666167.8, 1211373.6]
         *       ]
         *      ]
         * }
         *
         */
        geometry: string;
        /**
         * Properties JSON with detail from the OEREB layer
         *
         * @example
         * properties = {
         *   bfs_nr: 1216,
         *   number: "128",
         *   telefon: "041 500 60 60",
         *   egris_egrid: "CH427948074677",
         *   oereb_status_en: "ÖREB-Kataster eingeführt",
         *   bgdi_status: 0,
         *   oereb_status_it: "Catasto RDPP introdotto",
         *   label: "Silenen",
         *   adresszeile: "Neuland 11",
         *   fid: "1216",
         *   kanton: "Uri",
         *   url_oereb: "http://www.oereb.ur.ch",
         *   email: "mail@lisag.ch",
         *   oereb_status_fr: "Cadastre RDPPF introduit",
         *   ort: "Altdorf UR",
         *   gemeindename: "Silenen",
         *   plz: 6460,
         *   oereb_status_de: "ÖREB-Kataster eingeführt",
         *   oereb_status_rm: "ÖREB-Kataster eingeführt",
         *   oereb_extract_pdf: "https://prozessor-oereb.ur.ch/oereb/extract/reduced/pdf/CH427948074677",
         *   oereb_webservice: "https://prozessor-oereb.ur.ch/oereb",
         *   firmenname: "Lisag AG"
         * };
         */
        properties: string;
    }
}
