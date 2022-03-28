declare namespace ui.tool { 
    interface ModelingTool {
        abort(): void;
        onAbort: Event<void>;

        complete(): void;

        onMapClick: Event<GlobalPosition>;
    }
}