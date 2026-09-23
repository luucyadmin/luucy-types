declare namespace ui {
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
     *             labeledValue.icon = ui.icons.danger;
     *         } else {
     *             labeledValue.icon = ui.icons.success;
     *         }
     *     } else {
     *         labeledValue.value = "No Project Selected";
     *         labeledValue.icon = null;
     *     }
     * });
     */
    class LabeledValue extends Element {
        /**
         * Creates a labeled value
         *
         * @param label Label shown on the left
         * @param value Value shown on the right
         * @param icon Optional icon indicating a state
         * @param tooltip Will provide a tooltip on mouseover
         */
        constructor(label: string, value?: string | number, icon?: IconElement, tooltip?: string);

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
         * Icon
         * 
         * Setting icon to `null` will not display any indicator.
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        icon: IconElement;

        /**
         * Emits when the label, value or icon changes
         */
        onContentChange: Event<void>;
    }
}