declare namespace ui {
    interface HTMLNode {}

    class HTMLText implements HTMLNode {
        constructor(text: string);

        text: string;
    }

    class HTMLElement implements HTMLNode {
        constructor(
            tag: string, 
            attributes?: { [ key: string ]: any }, 
            ...children: HTMLNode[]
        );

        readonly tagName: string;

        readonly children: HTMLNode[];
        appendChild(node: HTMLNode): void;
        removeChild(node: HTMLNode): void;
        insertBefore(node: HTMLNode, reference: HTMLNode): void;
        insertAfter(node: HTMLNode, reference: HTMLNode): void;
        clearChildren(): void;

        setAttribute(name: string, value: string): this;
        getAttribute(name: string): string;
        removeAttribute(name: string): void;
        hasAttribute(name: string): boolean;
    }
}