declare namespace ui.embedded {
    /**
     * Base interface for a node in the embedded DOM tree
     */
    interface Node {
        /**
         * Unique id of the node
         */
        readonly id: string;
    }

    /**
     * A text node in the embedded DOM tree
     */
    class Text implements Node {
        /**
         * Unique id of the node
         */
        readonly id: string;

        /**
         * Creates a text node with the given content
         */
        constructor(text: string);

        /**
         * Content of the text node
         */
        text: string;
    }

    /**
     * An element node in the embedded DOM tree
     */
    class Element implements Node {
        /**
         * Unique id of the node
         */
        readonly id: string;

        /**
         * Creates an element with the given tag, attributes and children
         */
        constructor(
            tag: string,
            attributes: { [ key: string ]: any },
            ...children: (Node | string | Node[])[]
        );

        /**
         * Tag name of the element
         */
        readonly tag: string;

        /**
         * Child nodes of this element
         */
        readonly children: Node[];

        /**
         * Appends a node as the last child of this element
         */
        appendChild(node: Node): void;

        /**
         * Removes a child node from this element
         */
        removeChild(node: Node): void;

        /**
         * Inserts a node before the given reference child
         */
        insertBefore(node: Node, reference: Node): void;

        /**
         * Inserts a node after the given reference child
         */
        insertAfter(node: Node, reference: Node): void;

        /**
         * Removes all child nodes from this element
         */
        clearChildren(): void;

        /**
         * Sets an attribute on the element
         */
        setAttribute(name: string, value: string): this;

        /**
         * Gets the value of an attribute, or `null` if it isn't set
         */
        getAttribute(name: string): string | null;

        /**
         * Removes an attribute from the element
         */
        removeAttribute(name: string): void;

        /**
         * Returns whether the element has the given attribute
         */
        hasAttribute(name: string): boolean;

        /**
         * Sets a JavaScript property on the element
         */
        setProperty(name: string, value: string): this;

        /**
         * Gets the value of a JavaScript property
         */
        getProperty(name: string): any;

        /**
         * Returns whether the element has the given property
         */
        hasProperty(name: string): boolean;
    }
}