declare namespace embed {
    /**
     * connect to the parent application
     */
    function connect(application: string): Promise<Embed>;

    interface Embed {
        application: string;

        onMessage: Event<any>;
        sendMessage(data: any): void;
    }
}