declare namespace ui.tool { 
    interface Tool {
        abort(): void;
        onAbort: Event<void>;

        complete(): void;

        onMapClick: Event<GlobalPosition>;
    }
}