declare namespace ui {
    /** 
     * Labeled Color 
     * 
     * Displays a color with a label
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
    class LabeledColor extends Element {
        constructor(label: string, color: Color, help?: string);

        /**
         * Label describing meaning of the color
         * 
         * Can be changed after beeing added to an area/element and will automatically update.
         */
        label: string;

        /**
         * Color shown next to the label content
         *
         * Can be changed after being added to an area/element and will automatically update.
         */
        color: Color;

        onContentChange: Event<void>;
    }
}

