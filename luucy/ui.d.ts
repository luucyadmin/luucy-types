/** 
 * User interface components
 * 
 * @example 
 * //  creating a simple label and adding it to the left panel
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
        readonly parent?: Element | Area<Element>;

        /** 
         * Appends an element as a child 
         * 
         * @example 
         * //  Creating a section and adding a label to it
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

        /**
         * Indicates if the element is currently visible
         * 
         * Hide a element by calling `.hide()`
         */
        readonly visible;

        /**
         * Indicates if the element is currently hidden.
         * If the element is not visible, make sure that it has been added with `.add()`!
         * 
         * Show a element by calling `.show()`
         */
        readonly hidden;

        /**
         * Makes an element visible after beeing hidden with `.hide()`.
         * If the element is not visible, make sure that it has been added with `.add()`!
         * 
         * The element can be hidden again by calling `.hide()`. 
         * This will change `.visible` and `.hidden`
         */
        show();

        /**
         * Hides an element from the view.
         * Elements can be removed by calling `.remove(element)` on the parent.
         * 
         * The element can be shown again by calling `.show()`. 
         * This will change `.visible` and `.hidden`
         */
        hide();
    }

    /** 
     * Plugin Area
     * 
     * The global areas are exposed in `ui.areas` (eg. `ui.areas.panel`, `ui.areas.dataAndUsage`, ...)
     */
    interface Area<TChildren> {
        /** 
         * Adds an element to a area.
         * 
         * Adding elements (preferably a `Section`) to an area will display them inside of the area.
         * A little `Provided by {your plugins name}` will be added after each element. 
         * Wrap your elements in `Container` to group them together and only get one provider label.
         * 
         * @example 
         * //  Adding an empty section to the global panel area (`ui.areas.panel`)
         * const section = new ui.Section("Example Section");
         * ui.areas.panel.add(section);
         */
        add(section: TChildren);
    }

    /** 
     * Vertical bar chart 
     * 
     * @example 
     * //  Create a price chart
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
        addSegment(name: string, value: number);
    }

    /** 
     * Label 
     * 
     * Displays a text. 
     * Use `LabeledValue` if you want to display a value on the right of a label.
     * 
     * @example 
     * //  Creating a "Hello World" label
     * const label = new ui.Label("Hello World!");
     * 
     * section.add(label);
     * 
     * @example 
     * //  Creating a timer
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
     * @example 
     * //  Adding a labeled value which updates whenever a project is selected
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
     * @example 
     * //  Creating a button
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
     * @example 
     * //  Toggeling button
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
        onClick: Event<void>;
    }

    /** 
     * Remote Images 
     * 
     * Loads images from a remote server
     * 
     * @example 
     * //  Loading a remote image
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

    /** 
     * Section 
     * 
     * As used in panels, compareable to "Data & usage", "Compare variants", ...
     * 
     * @example 
     * //  Creating a section with a label, adding it to the left panel
     * const section = new ui.Section("Test Section");
     * ui.areas.panel.add(section);
     * 
     * const label = new ui.Label("Test Label");
     * section.add(label);
     */
    class Section extends Element {
        /** 
         * Creates a section 
         * 
         * @param name - Name of the section. Can't be changed after creating the section.
         */
        constructor(name: string);
    }

    /** 
     * Empty Container 
     * 
     * Can be used to combine multiple elements together to omit multiple "Provided by" labels.
     * 
     * @example 
     * //  Creating a label & button inside of the left panel
     * const container = new ui.Container();
     * ui.areas.panel.add(container);
     * 
     * const label = new ui.Label("Test Label");
     * container.add(label);
     * 
     * const button = new ui.Button("Test Button");
     * container.add(button);
     */
    class Container extends Element {
        constructor();
    }

    /** 
     * Panel 
     * 
     * Creates a right panel. The panel will only be displayed when `.open()` is called. 
     * Do not automatically open a panels, wait for user input!
     * 
     * @example 
     * //  Creating a panel and a button to open it
     * const panel = new ui.Panel("Test Panel");
     * const label = new ui.Label();
     * 
     * panel.add(label);
     * 
     * const button = new ui.Button("Open Panel", () => {
     *     label.content = `Opened at: ${new Date().toString()}`;
     * 
     *     panel.open();
     * });
     */
    class Panel implements Area<Element> {
        /** 
         * Creates a panel 
         * 
         * @param name - The panels name. Can't be changed after the panel has been created.
         */
        constructor(name: string);

        /**
         * Opens the panel
         * 
         * Do not open the panel automatically! Please wait for user input, eg. a button press!
         * The panel can be closed programatically by calling `.close()`
         */
        open();

        /**
         * Closes the panel
         * 
         * The panel can be opened again by calling `.open()`
         */
        close();

        /**
         * Add an element to the panel
         */
        add(element: Element);
    }

    /** 
     * Text input field 
     * 
     * Creates a text field used for user input.
     *
     * @example 
     * //  Create input
     * const input = new ui.TextField("Test Input", "Hello World");
     * input.onValueChange.subscribe(value => {
     *     console.log(value);
     * });
     * 
     * section.add(input);
     */
    class TextField extends Element {
        constructor(label: string, value?: string, placeholder?: string);

        /**
         * Describes the purpose of an input and is displayed next to the field
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        label: string;

        /**
         * The gray text visible in the text field when no text has been entered
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        placeholder: string;

        /**
         * The fields content as entered by the user.
         * Setting this programatically will trigger the `onValueChange` event.
         * 
         * Don't use `Timer`s to check for changes, use the `onValueChange` event instead!
         */
        value: string;

        /**
         * The event is triggered whenever the user changes the input.
         */
        onValueChange: Event<string>;

        /**
         * The event is triggered whenever the user is changing the input.
         * Do not do heavy calculations, request or complex ui manipulations in here, as this event is called on every keystroke!
         * 
         * @example 
         * //  Show a error message when the input is too long
         * // create error message label. content will be set later on
         * const errorMessage = new ui.Label();
         * errorMessage.hide();
         * 
         * section.add(errorMessage);
         * 
         * // create input field
         * const input = new ui.Input("Project Name");
         *
         * input.onImmediateValueChange.subscribe(value => {
         *     if (value.length > 25) {
         *         errorMessage.content = `Project name is ${value.length - 25} characters too long!`;
         *         errorMessage.show();
         *     } else {
         *         errorMessage.hide();
         *     }
         * });
         * 
         * section.add(input);
         */
        onImmediateValueChange: Event<string>;
    }

    /** 
     * Number input field 
     * 
     * Creates a number field used for user input.
     *
     * @example 
     * //  Create input
     * const input = new ui.TextField("Test Input", 100);
     * input.onValueChange.subscribe(value => {
     *     console.log(value);
     * });
     * 
     * section.add(input);
     */
    class NumberField extends Element {
        constructor(label: string, value?: number, placeholder?: string);

        /**
         * Describes the purpose of an input and is displayed next to the field
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        label: string;

        /**
         * The gray text visible in the text field when no text has been entered
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        placeholder: string;

        /**
         * The fields number as entered by the user.
         * Setting this programatically will trigger the `onValueChange` event.
         * 
         * Don't use `Timer`s to check for changes, use the `onValueChange` event instead!
         */
        value: number;

        /**
         * The event is triggered whenever the user changes the input.
         */
        onValueChange: Event<number>;

        /**
         * The event is triggered whenever the user is changing the input.
         * Do not do heavy calculations, request or complex ui manipulations in here, as this event is called on every keystroke!
         * 
         * @example 
         * //  Calculate a price while the user is typing
         * const basePrice = 69;
         * 
         * // price labeled value
         * const heatingCostLabel = new ui.LabeledValue("Heating Cost");
         * section.add(heatingCostLabel);
         * 
         * // create input field
         * const areaInput = new ui.Input("Area");
         *
         * areaInput.onImmediateValueChange.subscribe(value => {
         *     heatingCostLabel.value = basePrice * value;
         * });
         */
        onImmediateValueChange: Event<number>;
    }

    /** 
     * Radio input field 
     * 
     * Displays multiple choices as bullet points.
     * 
     * @example 
     * //  Price calculation based on apartment type
     * const types = [
     *     { name: "Basic Apartment", pricePerM2: 100 },
     *     { name: "Standard Apartment", pricePerM2: 150 },
     *     { name: "Luxury Apartment", pricePerM2: 250 },
     * ];
     * 
     * const area = 69;
     * 
     * const priceLabel = new ui.LabeledValue("Price");
     * section.add(area);
     * 
     * const typeSelect = new ui.RadioField("Apartment Type", types, types[1], type => type.name);
     * typeSelect.onValueChange.subscribe(type => {
     *     priceLabel = type.pricePerM2 * area;
     * });
     */
    class RadioField<T> extends Element {
        /**
         * Create a radio field
         * 
         * @param label - Describes the purpose of an input and is displayed next to the field
         * @param values - The values that can be seletced
         * @param value - What is currently selected. This can be null
         * @param transform - How to convert a value into a string for displaying it. 
         */
        constructor(label: string, values: T[], value?: T, transform?: (item: T) => string);

        /**
         * Describes the purpose of an input and is displayed next to the field
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        label: string;

        /**
         * The fields selected radio value.
         * Setting this programatically will trigger the `onValueChange` event.
         * 
         * Don't use `Timer`s to check for changes, use the `onValueChange` event instead!
         */
        value: T;

        /**
         * The event is triggered whenever the user selects another radio.
         */
        onValueChange: Event<T>;
    }

    /** 
     * Global areas 
     * 
     * You can add appropriate data to any area you like.
     * 
     * @example 
     * //  Adding a custom section to the left panel
     * const section = new ui.Section("Test Section");
     * ui.areas.panel.add(section);
     * 
     * @example 
     * //  Add a custom label and butto to the data and usage section
     * // create a container to group all of our elements together
     * const container = new ui.Container();
     * ui.areas.dataAndUsage.add(container);
     * 
     * // add our label and button to the container
     * const label = new ui.Label("Example Label");
     * container.add(label);
     * 
     * const button = new ui.Button("Example Button", () => console.log("clicked"));
     * container.add(button);
     */
    const areas: {
        /** 
         * Left Panel 
         * 
         * Add a custom section if the plugin/elements don't fit in the predefined areas (`buildingAndCosts`, `dataAndUsage`, ...).
         */
        panel: Area<Section>,

        /** 
         * Building Costs Panel 
         * 
         * Elements and properties regarding a variants building costs can be added to this area.
         * If multiple elements are added, make sure to group them in a `new ui.Container()`!
         * 
         * A 'Provided by' label will automatically be added to every element added to this area.
         */
        buildingAndCosts: Area<Exclude<Element, Section>>,

        /** 
         * Data and Usage Panel 
         * 
         * Elements and properties regarding a variants general data (like Volume, Area, ...) can be added to this area.
         * If multiple elements are added, make sure to group them in a `new ui.Container()`!
         * 
         * A 'Provided by' label will automatically be added to every element added to this area.
         */
        dataAndUsage: Area<Exclude<Element, Section>>,

        /** 
         * Compare Variants Panel
         * 
         * Elements and properties comparing variants can be added to this area.
         * If multiple elements are added, make sure to group them in a `new ui.Container()`!
         * 
         * A 'Provided by' label will automatically be added to every element added to this area.
         */
        compareVariants: Area<Exclude<Element, Section>>
    }
}