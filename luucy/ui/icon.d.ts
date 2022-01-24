declare namespace ui {
    /**
     * Icons
     * 
     * System icons.
     * 
     * @example // Create an action on a section
     * const section = new ui.Section("Cool Section");
     * 
     * section.createAction(ui.icons.play, "Play", () => {
     *     console.log("play!");
     * });
     * 
     * app.add(section);
     */
    interface IconElement extends Element {
        readonly type: string;
    }

    const icons: {
        pause: IconElement;
        play: IconElement;
        speed: IconElement;

        bought: IconElement;
        mine: IconElement;
        public: IconElement;

        lockCamera: IconElement;
        center: IconElement;
        full: IconElement;

        minus: IconElement;
        plus: IconElement;

        pointOfInterestHighlight: IconElement;
        pointOfInterest: IconElement;

        skyview: IconElement;
        streatview: IconElement;

        accountTrail: IconElement;
        account: IconElement;
        addon: IconElement;
        export: IconElement;

        unmute: IconElement;
        mute: IconElement;

        remove: IconElement;

        search: IconElement;
        share: IconElement;

        enviroment: IconElement;
        projects: IconElement;
        settings: IconElement;
        slides: IconElement;

        luucy: IconElement;

        roof: IconElement;
        roof1: IconElement;
        roof2: IconElement;
        rotate: IconElement;

        shadowOff: IconElement;
        shadowOn: IconElement;

        area: IconElement;
        buffer: IconElement;
        building: IconElement;
        camera: IconElement;
        copy: IconElement;
        extrude: IconElement;
        hidden: IconElement;
        image: IconElement;
        import: IconElement;
        line: IconElement;
        object: IconElement;
        text: IconElement;
        tools: IconElement;
        undo: IconElement;
        volume: IconElement;
        write: IconElement;

        attention: IconElement;
        back: IconElement;
        calendar: IconElement;
        check: IconElement;
        close: IconElement;
        condense: IconElement;
        drag: IconElement;
        error: IconElement;
        expand: IconElement;
        lockView: IconElement;
        view: IconElement;
        fold: IconElement;
        georeferencer: IconElement;
        google: IconElement;
        info: IconElement;
        lock: IconElement;
        menuSmall: IconElement;
        office365: IconElement;
        ok: IconElement;
        overview: IconElement;
        plusSmall: IconElement;
        progress: IconElement;
        read: IconElement;
        showLock1: IconElement;
        showLock: IconElement;
        tooltip: IconElement;
        unfold: IconElement;
        upSmall: IconElement;

        snap: IconElement;
        messure: IconElement;
        pointtopoint: IconElement;
        screenshot: IconElement;
        seatopoint: IconElement;
        time: IconElement;
        timeline: IconElement;
    }
}