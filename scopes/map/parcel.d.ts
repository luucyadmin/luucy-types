declare namespace map {
    /**
     * Parcel
     *
     * A parcel detail information.
     *
     *
     * @example // Add a lable with parcel info where the user clicked
     * map.onParcelSelect.subscribe(parcel => {
     *     new ui.Label("Selected parcel: "+ parcel.id);
     * });
     * );
     */
    class Parcel {
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
        readonly geometry: string;
        /**
         * Parcel name
         */
        readonly name: string;
        /**
         * Parcel type
         */
        readonly type: string;
        /**
         * Parcel identifier
         */
        readonly id: number;
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
        readonly properties: string;
    }
}
