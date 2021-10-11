/** User interface */
declare namespace ui {
    class Element {
        children: Element[];
        parent?: Element | Area;

        add(element: Element);
        insertAfter(child: Element, after: Element);
        insertBefore(child: Element, before: Element);
        remove(child: Element);
    }

    /** Plugin Area. Sections may be added to the section */
    interface Area {
        add(section: Section);
    }

    /** Simple input field */
    class Field extends Element {
        constructor(type: "text" | "number", label: string, value?);

        label: string;
        placeholder: string;

        value: any;

        onvaluechange: PluginEvent<any>;
    }

    /** Vertical bar chart */
    class BarChart extends Element {
        constructor(name: string, unit?: string);

        max: number;

        addSegment(name: string, value: string);
    }

    /** Label */
    class Label extends Element {
        constructor(content: string);

        content: string;
    }

    /** Labeled Value */
    class LabeledValue extends Element {
        constructor(label: string, value?: string | number);

        label: string;
        value: string | number;
        state: null | "success" | "warn" | "danger";
    }

    /** Empty Container */
    class Button extends Element {
        constructor(label: string, handler?: () => void);

        label: string;

        onclick: PluginEvent<void>;
    }

    /** Remote Images */
    class Image extends Element {
        constructor(source: string);

        source: string;
    }

    /** Panel Section */
    class Section extends Element {
        constructor(name: string);
    }

    /** Empty Container */
    class Container extends Element {
        constructor();
    }

    /** Panel */
    class Panel implements Area {
        constructor(name: string);

        open();
        close();

        add(section: Section);
    }

    /** Global areas */
    const areas: {
        /** Left Project Panel */
        panel: Area,

        /** Building Costs Panel */
        buildingAndCosts: Area,

        /** Data and Usage Panel */
        dataAndUsage: Area,

        /** Compare Variants Panel */
        compareVariants: Area
    }
}