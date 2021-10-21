/** 
 * User interface components
 * 
 * @example creating a simple label and adding it to the left panel
 * const label = new ui.Label("Hello World!");
 * ui.areas.panel.add(label);
 */
declare namespace ui {
    class Element {
        /** 
         * Contains all child elements. 
         * 
         * Modify the children by using `add()`, `insertAfter()`, `insertBefore()` and `remove()`
        */
        readonly children: Element[];

        /** 
         * References the elements parent element or area 
         */
        readonly parent?: Element | Area;

        /** 
         * Appends an element as a child 
         * 
         * @example Creating a section and adding a label to it
         * const section = new ui.Section("Example Section");
         * ui.areas.panel.add(section);
         * 
         * const label = new ui.Label("Hello World");
         * section.add(label);
         */
        add(element: Element);

        /** 
         * Appends an element as a child after the reference element 
         */
        insertAfter(child: Element, after: Element);

        /** 
         * Appends an element as a child before the reference element 
         */
        insertBefore(child: Element, before: Element);

        /** 
         * Removes an element as a child 
         */
        remove(child: Element);
    }

    /** 
     * Plugin Area
     * 
     * The global areas are exposed in `ui.areas` (eg. `ui.areas.panel`, `ui.areas.dataAndUsage`, ...)
     */
    interface Area {
        /** 
         * Adds an element to a area.
         * 
         * Adding elements (preferably a `Section`) to an area will display them inside of the area.
         * A little `Provided by {your plugins name}` will be added after each element. 
         * Wrap your elements in `Container` to group them together and only get one provider label.
         * 
         * @example Adding an empty section to the global panel area (`ui.areas.panel`)
         * const section = new ui.Section("Example Section");
         * ui.areas.panel.add(section);
         */
        add(section: Element);
    }

    /** 
     * Vertical bar chart 
     * 
     * @example Create a price chart
     * const chart = new ui.BarChart("Total Cost", "$");
     * chart.addSegment("Plot", 100);
     * chart.addSegment("Building", 150);
     * chart.addSegment("Architect", 20);
     * 
     * section.add(chart);
     */
    class BarChart extends Element {
        constructor(name: string, unit?: string);

        /**
         * Adds a new segment to the chart
         */
        addSegment(name: string, value: string);
    }

    /** 
     * Label 
     * 
     * Displays a text. 
     * Use `LabeledValue` if you want to display a value on the right of a label.
     * 
     * @example Creating a "Hello World" label
     * const label = new ui.Label("Hello World!");
     * 
     * section.add(label);
     * 
     * @example Creating a timer
     * const label = new ui.Label("");
     * section.add(label);
     * 
     * Timer.interval(index => {
     *     label.content = `${index}s elapsed`;
     * }, 1000);
     */
    class Label extends Element {
        constructor(content: string);

        /**
         * Labels content
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        content: string;
    }

    /** 
     * Labeled Value 
     * 
     * Displays a label on the left with its value on the right.
     * A state can be added, which will add an icon.
     * 
     * @example Adding a labeled value which updates whenever a project is selected
     * const labeledValue = new ui.LabeledValue("Project Name");
     * section.add(labeledValue);
     * 
     * onProjectSelect.subscribe(project => {
     *     if (project) {
     *         labeledValue.value = project.name;
     * 
     *         if (project.name.length > 100) {
     *             labeledValue.state = "danger";
     *         } else {
     *             labeledValue.state = "success";
     *         }
     *     } else {
     *         labeledValue.value = "No Project Selected";
     *         labeledValue.state = null;
     *     }
     * });
     */
    class LabeledValue extends Element {
        constructor(label: string, value?: string | number);

        /**
         * Label
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        label: string;

        /**
         * Value
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        value: string | number;

        /**
         * State Indicator
         * 
         * Setting state to `null` will not display any indicator.
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        state: null | "success" | "warn" | "danger";
    }

    /** 
     * Button 
     * 
     * Buttons have a label and will fire the `Click` event when it is clicked
     * 
     * @example Creating a button
     * // using handler constructor
     * const button = new ui.Button("Click me!", () => {
     *     console.log("Button Clicked!");
     * });
     * 
     * // using event
     * const button = new ui.Button("Click me!");
     * button.onClick.subscribe(() => {
     *     console.log("Button Clicked!");
     * });
     * 
     * section.add(button);
     * 
     * @example Toggeling button
     * let state = false;
     * 
     * const button = new ui.Button("Turn on", () => {
     *     // toggle the state variable
     *     state = !state;
     * 
     *     console.log("Toggeled to: ", state);
     * 
     *     // update the buttons text
     *     button.label = state ? "Turn off" : "Turn on";
     * });
     * 
     * section.add(button);
     */
    class Button extends Element {
        /**
         * Creates a button
         * 
         * @param label Will be displayed as the buttons text
         * @param handler Will automatically subscribe to the `onClick` event.
         */
        constructor(label: string, handler?: () => void);

        /**
         * Buttons Text
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        label: string;

        /**
         * Click Event
         * 
         * Will be fired when the user clicks on the button.
         * The `handler` parameter of the `Button` constructor can be used to automatically subscribe to onClick.
         */
        onClick: PluginEvent<void>;
    }

    /** 
     * Remote Images 
     * 
     * Loads images from a remote server
     * 
     * @example Loading a remote image
     * const image = new ui.Image("https://example.com/image");
     * 
     * section.add(image);
     */
    class Image extends Element {
        constructor(source?: string);

        /**
         * Images source URL
         * 
         * Can be changed after beeing added to an area/element and will automatically reload the image.
         */
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

        onValueChange: PluginEvent<text>;
    }

    /** Number input field */
    class NumberField extends Element {
        constructor(label: string, value?: number);

        label: string;
        placeholder: string;

        value: number;

        onValueChange: PluginEvent<number>;
    }

    /** Number input field */
    class RadioField<T> extends Element {
        constructor(label: string, values: T[], value?: T, transoform?: (item: T) => string);

        label: string;

        value: T;

        onValueChange: PluginEvent<T>;
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