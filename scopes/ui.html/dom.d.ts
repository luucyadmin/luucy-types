interface NodeList {
    [index: number]: Node;
    length: number;
}

interface Node {
    text: string;
    children: NodeList;
    firstChild: Node;
    lastChild: Node;

    appendChild(node: Node): void;
    removeChild(node: Node): void;

    insertBefore(n1: Node, n2: Node): void;
    insertAfter(n1: Node, n2: Node): void;
}

interface ClassList {
    add(...names: string[]): void;
    remove(...names: string[]): void;
    toggle(name: string): void;
}

interface HTMLElement extends Node {
    textContent: string;

    readonly tagName: string;

    className: string;
    classList: ClassList;

    setAttribute(name: string, value: string): void;
    getAttribute(name: string): string;
    hasAttribute(name: string): boolean;
}