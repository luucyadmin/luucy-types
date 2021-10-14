/** User interface */
declare namespace ui {
    class Element {
        /** Contains all child elements. 
         * 
         * Modify the children by using `add()`, `insertAfter()`, `insertBefore()` and `remove()`
        */
        readonly children: Element[];

        /** References the elements parent element or area */
        readonly parent?: Element | Area;

        /** Appends an element as a child */
        add(element: Element);

        /** Appends an element as a child after the reference element */
        insertAfter(child: Element, after: Element);

        /** Appends an element as a child before the reference element */
        insertBefore(child: Element, before: Element);

        /** Removes an element as a child */
        remove(child: Element);
    }

    /** Plugin Area. Sections may be added to the section */
    interface Area {
        add(section: Section);
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

    /** Text input field */
    class TextField extends Element {
        constructor(label: string, value?: string);

        label: string;
        placeholder: string;

        value: string;

        onvaluechange: PluginEvent<any>;
    }

    /** Number input field */
    class NumberField extends Element {
        constructor(label: string, value?: number);

        label: string;
        placeholder: string;

        value: number;

        onvaluechange: PluginEvent<any>;
    }

    /** Number input field */
    class RadioField<T> extends Element {
        constructor(label: string, values: T[], value?: T, transoform?: (item: T) => string);

        label: string;

        value: T;

        onvaluechange: PluginEvent<any>;
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