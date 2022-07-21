declare namespace web {
    /** 
     * WebSockets
     * 
     * @example // Connect to web sockets
     * new web.Socket("https://example.com/socket").get().then(res => res.json()).then(data => {
     *     console.log(data);
     * });
     */
    class Socket {
        constructor(source: string);

        connect(): Promise<void>;
        sendMessage(data: any): void;

        onMessage: Event<any>;
    }
}