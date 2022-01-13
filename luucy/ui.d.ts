declare enum State {
    success,
    warn,
    danger
}

/** 
 * User interface components
 * 
 * @example // creating a simple label and adding it to the left panel
 * const section = ui.createProjectPanelSection();
 * section.add(new ui.Label("Hello World!"));
 * 
 * section.add(new ui.Button(ui.icons.play, "Click Me!", () => {
 *     console.log("I was clicked!");
 * }));
 */
declare namespace ui {
    /**
     * Danger State
     * 
     * section.add(new ui.Note(ui.danger, "Yeah, this went south!"));
     */
    const danger: State;

    /**
     * Warn State
     * 
     * section.add(new ui.Note(ui.warn, "Oh no!"));
     */
    const warn: State;

    /**
     * Success State
     * 
     * section.add(new ui.Note(ui.success, "Some Good News"));
     */
    const success: State;

    /**
     * Creates a section for your application in the project panel.
     * The section will automatically be added to the panel.
     * 
     * @example // Create section
     * const section = ui.createProjectPanelSection();
     * section.add(new ui.Label("Test application section!"));
     */
    function createProjectPanelSection(): Container;

    class Element {
        /** 
         * References the elements parent element or area 
         */
        readonly parent?: Element;

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

    interface ElementContainer {
        /** 
         * Contains all child elements. 
         * 
         * Modify the children by using `add()`, `insertAfter()`, `insertBefore()` and `remove()`
         */
        readonly children: Element[];

        /** 
         * Appends an element as a child 
         * 
         * @example // Creating a section and adding a label to it
         * const section = ui.createProjectPanelSection();
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
     * Field Element
     * 
     * All fields / inputs implement field element. 
     * The interface does not container any properties or functions on its own.
     */
    interface FieldElement {}

    /** 
     * Vertical bar chart 
     * 
     * @example // Create a price chart
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
     * Use `Paragraph` if you want a margin after the text
     * 
     * @example // Creating a "Hello World" label
     * const label = new ui.Label("Hello World!");
     * 
     * section.add(label);
     * 
     * @example // Creating a timer
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
     * Paragraph 
     * 
     * Displays a text paragraph with a margin at the end. 
     * 
     * @example // Creating a "Lorem Ipsum" paragraph
     * const paragraph = new ui.Label("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus enim malesuada, hendrerit ex vel, gravida sem. Curabitur eget pretium leo. Vivamus orci dolor, consectetur non arcu at, elementum pharetra quam.");
     * section.add(paragraph);
     */
     class Paragraph extends Element {
        constructor(content: string);

        /**
         * Paragraph content
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        content: string;
    }

    /** 
     * Code 
     * 
     * Displays a monospaced text paragraph. 
     * Newllines and double spaces will not be truncated, the text is renderet as is (like <pre>).
     * Overflow will display scrollbars.
     * 
     * @example // Creating a code block containing pi
     * const code = new ui.Code("3.141592653589793238462643383279502884197169");
     * section.add(code);
     */
     class Code extends Element {
        constructor(content: string);

        /**
         * Code content
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
     * @example // Adding a labeled value which updates whenever a project is selected
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
        state: State;
    }

    /** 
     * Vertical bar chart 
     * 
     * @example // Create a note
     * section.add(new ui.Note(ui.danger, "This did not go well!"));
     */
    class Note extends Element {
        constructor(state: State, message?: string);
    }

    /** 
     * Button 
     * 
     * Buttons have a label and will fire the `Click` event when it is clicked
     * 
     * @example // Creating a button
     * // using handler constructor
     * const button = new ui.Button(ui.icons.play, "Click me!", () => {
     *     console.log("Button Clicked!");
     * });
     * 
     * // using event
     * const button = new ui.Button(ui.icons.play, "Click me!");
     * button.onClick.subscribe(() => {
     *     console.log("Button Clicked!");
     * });
     * 
     * section.add(button);
     * 
     * @example // Toggeling button
     * let state = false;
     * 
     * const button = new ui.Button(ui.icons.center, "Turn on", () => {
     *     // toggle the state variable
     *     state = !state;
     * 
     *     console.log("Toggeled to: ", state);
     * 
     *     // update the buttons text and icon
     *     button.label = state ? "Turn off" : "Turn on";
     *     button.icon = state ? ui.icons.full : ui.icons.center;
     * });
     * 
     * section.add(button);
     */
    class Button extends Element {
        /**
         * Creates a button
         * 
         * @param icon Icon for the button (`ui.icons.`)
         * @param label Will be displayed as the buttons text
         * @param handler Will automatically subscribe to the `onClick` event.
         */
        constructor(label: string, handler?: () => void);
        constructor(icon: IconElement, label: string, handler?: () => void);

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
     * @example // Loading a remote image
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
     * @example // Creating a section with a label, adding it to the left panel
     * const appSection = ui.createProjectPanelSection();
     * 
     * const section = new ui.Section("Test Section");
     * appSection.add(section);
     * 
     * const label = new ui.Label("Test Label");
     * section.add(label);
     */
    class Section extends Element implements ElementContainer {
        /** 
         * Creates a section 
         * 
         * @param name - Name of the section. Can't be changed after creating the section.
         */
        constructor(name: string);

        /**
         * Adds an action button to the title of the section
         * 
         * @example // Create a section action
         * section.createAction(ui.icons.calendar, "Calendar", () = > {
         *     console.log("show some calendar!")
         * });
         */
        createAction(icon: IconElement, name: string, action: () => void);

        readonly children: Element[];
        add(element: Element);
        insertAfter(child: Element, after: Element);
        insertBefore(child: Element, before: Element);
        remove(child: Element);
    }

    /** 
     * Empty Container 
     * 
     * @example // Creating a label & button inside of the left panel
     * const container = new ui.Container();
     * section.add(container);
     * 
     * const label = new ui.Label("Test Label");
     * container.add(label);
     * 
     * const button = new ui.Button(ui.icons.play, "Test Button");
     * container.add(button);
     */
    class Container extends Element implements ElementContainer {
        constructor();

        readonly children: Element[];
        add(element: Element);
        insertAfter(child: Element, after: Element);
        insertBefore(child: Element, before: Element);
        remove(child: Element);
    }

    /**
     * Separator
     * 
     * Splits content with a horizontal line, compareable to <hr>
     * 
     * @example // Separate two ares in a section
     * const section = new ui.Section("Important Details");
     * section.add(new ui.Label("Lorem"));
     * section.add(new ui.Separator());
     * section.add(new ui.Label("Ipsum"));
     */
    class Separator extends Element {}

    /** 
     * Panel 
     * 
     * Creates a right panel. The panel will only be displayed when `.open()` is called. 
     * Do not automatically open a panels, wait for user input!
     * 
     * @example // Creating a panel and a button to open it
     * const panel = new ui.Panel("Test Panel");
     * const label = new ui.Label();
     * 
     * panel.add(label);
     * 
     * const button = new ui.Button(ui.icons.full, "Open Panel", () => {
     *     label.content = `Opened at: ${new Date().toString()}`;
     * 
     *     panel.open();
     * });
     */
    class Panel implements ElementContainer {
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

        readonly children: Element[];
        add(element: Element);
        insertAfter(child: Element, after: Element);
        insertBefore(child: Element, before: Element);
        remove(child: Element);
    }

    /** 
     * Modal 
     * 
     * Creates a modal. The modal will only be displayed when `.open()` is called. 
     * Do not automatically open a modal, wait for user input!
     * 
     * @example // Creating a modal and a button to open it
     * const modal = new ui.Modal("Test Modal");
     * const label = new ui.Label();
     * 
     * modal.add(label);
     * 
     * const button = new ui.Button(ui.icons.full, "Open Modal", () => {
     *     label.content = `Opened at: ${new Date().toString()}`;
     * 
     *     modal.open();
     * });
     */
     class Modal implements ElementContainer {
        /** 
         * Creates a modal
         * 
         * @param name - The modals name. Can't be changed after the modal has been created.
         */
        constructor(name: string);

        /**
         * Opens the modal window
         * 
         * Do not open the modal automatically! Please wait for user input, eg. a button press!
         * The modal can be closed programatically by calling `.close()`
         */
        open();

        /**
         * Closes the modal
         * 
         * The modal window can be opened again by calling `.open()`
         */
        close();

        readonly children: Element[];
        add(element: Element);
        insertAfter(child: Element, after: Element);
        insertBefore(child: Element, before: Element);
        remove(child: Element);
    }

    /** 
     * Checkbox
     * 
     * Creates a checkbox used to toggle between true/false.
     *
     * @example // Create input
     * const checkbox = new ui.Checkbox("Test Input", false);
     * checkbox.onValueChange.subscribe(value => {
     *     console.log(value);
     * });
     * 
     * section.add(checkbox);
     */
     class Checkbox extends Element {
        constructor(label: string, value?: boolean);

        /**
         * Describes the purpose of an input and is displayed next to the checkbox
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        label: string;

        /**
         * The checkboxes state.
         * Setting this programatically will trigger the `onValueChange` event.
         * 
         * Don't use `Timer`s to check for changes, use the `onValueChange` or `onImmediateValueChange` event instead!
         */
        value: boolean;

        /**
         * The event is triggered whenever the user changes the input.
         */
        onValueChange: Event<boolean>;
    }

    /** 
     * Text input field 
     * 
     * Creates a text field used for user input.
     *
     * @example // Create input
     * const input = new ui.TextField("Test Input", "Hello World");
     * input.onValueChange.subscribe(value => {
     *     console.log(value);
     * });
     * 
     * section.add(input);
     */
    class TextField extends Element implements FieldElement {
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
         * Don't use `Timer`s to check for changes, use the `onValueChange` or `onImmediateValueChange` event instead!
         */
        value: string;

        /**
         * The event is triggered whenever the user changes the input.
         */
        onValueChange: Event<string>;

        /**
         * The event is triggered whenever the user is changing the input.
         * Do not do heavy calculations, requests or complex ui manipulations in here, as this event is called on every keystroke!
         * 
         * @example // Show a error message when the input is too long
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
     * @example // Create input
     * const input = new ui.TextField("Test Input", 100);
     * input.onValueChange.subscribe(value => {
     *     console.log(value);
     * });
     * 
     * section.add(input);
     */
    class NumberField extends Element implements FieldElement {
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
         * Don't use `Timer`s to check for changes, use the `onValueChange` or `onImmediateValueChange` event instead!
         */
        value: number;

        /**
         * The event is triggered whenever the user changes the input.
         */
        onValueChange: Event<number>;

        /**
         * The event is triggered whenever the user is changing the input.
         * Do not do heavy calculations, requests or complex ui manipulations in here, as this event is called on every keystroke!
         * 
         * @example // Calculate a price while the user is typing
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
     * @example // Price calculation based on apartment type
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
    class RadioField<T> extends Element implements FieldElement {
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
     * Select input field 
     * 
     * Displays multiple choices as a select box.
     * 
     * @example // Price calculation based on apartment type
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
     * const typeSelect = new ui.SelectField("Apartment Type", types, types[1], type => type.name);
     * typeSelect.onValueChange.subscribe(type => {
     *     priceLabel = type.pricePerM2 * area;
     * });
     */
     class SelectField<T> extends Element implements FieldElement {
        /**
         * Create a select field
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
         * The fields selected option.
         * Setting this programatically will trigger the `onValueChange` event.
         * 
         * Don't use `Timer`s to check for changes, use the `onValueChange` event instead!
         */
        value: T;

        /**
         * The event is triggered whenever the user changes the option.
         */
        onValueChange: Event<T>;
    }

    /** 
     * Slider
     * 
     * Displays a slider with a max and min value. 
     * Users can move a knob to adjust the value.
     * 
     * If no `step` is set, the slider will automatically have 100 steps.
     * 
     * @example // Create a grade slider and automatically show if the user passed the test
     * const slider = new ui.Slider("Math test grade", 1, 6, 4, 0.25);
     * const label = new ui.Label("");
     * 
     * slider.onImmediateValueChange.subscribe(value => {
     *     if (value < 4) {
     *         label.content = "Did not pass this test, better luck next time!";
     *     } else if (value < 5) {
     *         label.content = "Passed the test, huh!";
     *     } else {
     *         label.content = "Excellent!";
     *     }
     * });
     * 
     * section.add(slider);
     */
    class Slider extends Element implements FieldElement {
        constructor(label: string, min: number, max: number, value?: number, step?: number);

        /**
         * Describes the purpose of an input and is displayed next to the field
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        label: string;

        /**
         * The minimal value on the slider. 
         * Negative values are possible.
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        min: number;

        /**
         * The maximal value on the slider. 
         * Negative values are possible.
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        max: number;

        /**
         * The current value of the slider.
         * Setting this programatically will trigger the `onValueChange` event.
         * 
         * Don't use `Timer`s to check for changes, use the `onValueChange` or `onImmediateValueChange` event instead!
         */
        value?: number;

        /**
         * The step of the slider. 
         * To have `50` steps on a slider from `0` to `10`, the `step` has to be set to `0.2` (`(10 - 0) / 50`).
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        step?: number;

        /**
         * The event is triggered whenever the user changes the input.
         */
        onValueChange: Event<number>;

        /**
         * The event is triggered whenever the user is changing the input.
         * Do not do heavy calculations, requests or complex ui manipulations in here, as this event is called on every tiny movement of the mouse!
         */
        onImmediateValueChange: Event<number>;
    }

    /**
     * Table Column
     * 
     * Describes a column within a table.
     * The transformer will be called for every value in the recods.
     * 
     * You can return a string, number, Images, Fields, Icons and Buttons!
     * 
     * @example // Create a table with an image, tooltips and actions
     * new ui.Table(buildings, [
     *     new ui.Column("Image", building => new ui.Image(building.imageUrl)),
     *     new ui.Column("Name", building => building.name),
     *     new ui.Column("Year", building => building.builtAt.getFullYear()).addTooltip(building => building.builtAt.toLocalDateString()),
     * 
     *     // add a report column with an action, which, when clicked, will open a modal
     *     new ui.Column("Report", building.lastReport.name).addAction(ui.icons.file, "View Report", building => {
     *         const modal = new ui.Modal();
     *         // add whatever needs to be added to your modal!
     * 
     *         modal.show();
     *     })
     * ])
     */
    class Column<T> {
        constructor(name: string, transformer: (item: T, index: number) => string | number | Image | FieldElement | IconElement | Button);

        addTooltip(transformer: (item: T, index: number) => string): this;
        addAction(icon: IconElement, name: string, onClick: (item: T) => string): this;
    }

    class Table<T> extends Element {
        constructor(records: T[], columns: ui.Column<T>[]);

        /**
         * This event is triggered whenever records are added, removed or overwritten using `setRecords`
         */
        onRecordsChange: Event<void>;

        /**
         * This event is triggered whenever a new column is added, or an existing column was removed.
         */
        onColumnsChange: Event<void>;

        /**
         * Creates a new column
         * 
         * @example // Creating a new column after creating a table
         * const table = new Table(buildings, [
         *      new ui.Column("Name", building => building.name)
         * ]);
         * 
         * const column = table.addColumn("Year", building => building.year);
         */
        addColumn(name: string, transformer: (item: T, index: number) => string | number | Image | FieldElement | IconElement | Button): Column<T>;

        /**
         * Removes a column from the table
         */
        removeColumn(column: Column<T>);

        /**
         * Add a record to the table
         * 
         * Avoid calling this method in a loop (`for`, `while`, ...) as it will re-render the whole table on each call. 
         * Batch your changes and use `table.setRecords` instead or use one call (`table.addRecord(stephan, lukas, felix)`)!
         * 
         * @example // Adding a record to a table
         * const buildings = [
         *     { name: "Zürich Main Station" },
         *     { name: "Rathausbrücke" }
         * ];
         * 
         * const table = new Table(buildings, [
         *      new ui.Column("Name", building => building.name)
         * ]);
         * 
         * section.add(table);
         * 
         * section.add(new ui.Button("Add Lucerene Main Station", () => {
         *     const lucerneMainStation = { name: "Lucerne Main Station" };
         *     
         *     table.addRecord(lucerneMainStation);
         * }));
         */
        addRecord(...records: T[]);

        /**
         * Remove a record from a table
         * 
         * Avoid calling this method in a loop (`for`, `while`, ...) as it will re-render the whole table on each call. 
         * Batch your changes and use `table.setRecords` instead or use one call (`table.removeRecord(stephan, lukas, felix)`)!
         * 
         * @example // Removing a record from a table
         * const people = [
         *     { name: "Stephan" },
         *     { name: "Lukas" }
         * ];
         * 
         * const table = new ui.Table(people, [
         *     new ui.Column("Name", person => person.name)
         * ]);
         * 
         * section.add(table);
         * 
         * section.add(new ui.Button("Remove Lukas", () => {
         *     const lukas = people.find(person => person.name == "Lukas");
         *     
         *     table.removeRecord(lukas);
         * }));
         */
        removeRecord(...record: T[]);

        /**
         * Overwrites the records currently displayed in the table
         * 
         * @example // Add 100 records at once
         * const pis = [
         *     Math.PI / 100,
         *     Math.PI / 100 * 2
         * ];
         * 
         * const table = new ui.Table(pis, [
         *     new ui.Column("Value", value => value)
         * ]);
         * 
         * section.add(table);
         * 
         * section.add(new ui.Button("Add More PIs", () => {
         *     const newPiValues = [];
         * 
         *     for (let i = 0; i < Math.PI; i += Math.PI / 100) {
         *         newPiValues.push(i);
         *     }
         *     
         *     table.setRecords(newPiValues);
         * }));
         */
        setRecords(records: T[]);
    }

    /**
     * Luucy fullscreen / embedded mode
     * 
     * Fullscren mode hides all panels and bars.
     * 
     * @example // Enable fullscreen for 5 seconds
     * const button = new ui.Button(ui.icons.full, "Enable Fullscreen (5s)", () => {
     *     ui.fullscreen.enable();
     * 
     *     Timer.timeout(() => ui.fullscreen.disable(), 5000);
     * });
     */
    const fullscreen: {
        /**
         * Enables fullscreen mode
         * 
         * Do not enable fullscreen mode without any user interaction!
         */
        enable();

        /**
         * Disables fullscreen mode
         */
        disable();
    }

    /**
     * Downloads a file. If no `name` is passed, the files `name` will be used.
     * 
     * @example // Download a helloworld.txt
     * const file = File.fromString("helloworld.txt", ""Hello World!");
     * 
     * section.add(new ui.Button(ui.icons.export, "Download helloworld.txt", () => ui.download(file)));
     */
    function download(file: File, name?: string);

    interface IconElement extends Element {}

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