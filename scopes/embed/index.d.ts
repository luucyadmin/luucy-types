declare namespace embed {
    /**
     * connect to the parent application
     */
    function connect(application: string): Promise<Embed>;

    /**
     * Connection to the parent application
     */
    interface Embed {
        /**
         * Name of the connected parent application
         */
        application: string;

        /**
         * Emitted when a message is received from the parent application
         */
        onMessage: Event<any>;

        /**
         * Sends a message to the parent application
         */
        sendMessage(data: any): void;
    }
}