/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WcButton {
        "color": "accent" | "light" | "";
        "disabled": boolean;
        "href": string;
        "shape": "rounded" | "";
        "size": "small" | "default" | "large" | "";
        "target": "_blank" | "_self";
        "type": "button" | "reset" | "submit";
        "variante": "solid" | "outline" | "clear" | "";
    }
}
declare global {
    interface HTMLWcButtonElement extends Components.WcButton, HTMLStencilElement {
    }
    var HTMLWcButtonElement: {
        prototype: HTMLWcButtonElement;
        new (): HTMLWcButtonElement;
    };
    interface HTMLElementTagNameMap {
        "wc-button": HTMLWcButtonElement;
    }
}
declare namespace LocalJSX {
    interface WcButton {
        "color"?: "accent" | "light" | "";
        "disabled"?: boolean;
        "href"?: string;
        "shape"?: "rounded" | "";
        "size"?: "small" | "default" | "large" | "";
        "target"?: "_blank" | "_self";
        "type"?: "button" | "reset" | "submit";
        "variante"?: "solid" | "outline" | "clear" | "";
    }
    interface IntrinsicElements {
        "wc-button": WcButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wc-button": LocalJSX.WcButton & JSXBase.HTMLAttributes<HTMLWcButtonElement>;
        }
    }
}
