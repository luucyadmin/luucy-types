declare namespace ui {
    class Element {
        /** 
         * References the elements parent element or area 
         */
        readonly parent?: ElementContainer | Area;

        /**
         * Indicates if the element is currently visible
         * 
         * Hide a element by calling `.hide()`
         */
        readonly visible: boolean;

        /**
         * Indicates if the element is currently hidden.
         * If the element is not visible, make sure that it has been added with `.add()`!
         * 
         * Show a element by calling `.show()`
         */
        readonly hidden: boolean;

        /**
         * Makes an element visible after beeing hidden with `.hide()`.
         * If the element is not visible, make sure that it has been added with `.add()`!
         * 
         * The element can be hidden again by calling `.hide()`. 
         * This will change `.visible` and `.hidden`
         */
        show(): void;

        /**
         * Hides an element from the view.
         * Elements can be removed by calling `.remove(element)` on the parent.
         * 
         * The element can be shown again by calling `.show()`. 
         * This will change `.visible` and `.hidden`
         */
        hide(): void;

        /**
         * Remove the element from its parent element
         */
        removeFromParent(): void;
        
        onVisibilityChange: Event<void>;
    }
}