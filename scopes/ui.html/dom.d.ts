declare namespace ui.html {
    interface Node {}

    interface Text extends Node {
        text: string;
    }

    interface Element extends Node {
        readonly tagName: string;

        readonly children: Node[];
        appendChild(node: Node): void;
        removeChild(node: Node): void;
        insertBefore(node: Node, reference: Node): void;
        insertAfter(node: Node, reference: Node): void;
        clearChildren(): void;

        setAttribute(name: string, value: string): void;
        getAttribute(name: string): string;
        removeAttribute(name: string): void;
        hasAttribute(name: string): boolean;
    }
}