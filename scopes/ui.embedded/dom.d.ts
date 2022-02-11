declare namespace ui.embedded {
    interface Node {}

    class Text implements Node {
        constructor(text: string);

        text: string;
    }

    class Element implements Node {
        constructor(
            tag: string, 
            attributes?: { [ key: string ]: any }, 
            ...children: Node[]
        );

        readonly tagName: string;

        readonly children: Node[];
        appendChild(node: Node): void;
        removeChild(node: Node): void;
        insertBefore(node: Node, reference: Node): void;
        insertAfter(node: Node, reference: Node): void;
        clearChildren(): void;

        setAttribute(name: string, value: string): this;
        getAttribute(name: string): string;
        removeAttribute(name: string): void;
        hasAttribute(name: string): boolean;
    }
}