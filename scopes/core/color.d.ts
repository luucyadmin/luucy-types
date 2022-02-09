/**
 * General Colors
 * 
 * Colors can be created from rgb (using `.fromRGB()`), from a hex string (using `.fromHex()`) or from HSL (using `.fromHSL()`)
 */
declare class Color {
    constructor(red: number, green: number, blue: number);

    /**
     * Creates a color from red green and blue.
     * 
     * Input values range from 0 - 255
     * 
     * @example const red = Color.fromRGB(255, 0, 0);
     */
    static fromRGB(red: number, green: number, blue: number): Color;

    /**
     * Creates a color from a hex color string
     * 
     * The function accepts `123`, `#123`, `123456` and `#123456` formats.
     * Inputs are not case sensitive
     * 
     * @example const red = Color.fromHex("#F00");
     * @example const green = Color.fromHex("#00ff00");
     * @example const blue = Color.fromHex("00f");
     * @example const red = Color.fromHex("fF0000");
     */
    static fromHex(hex: string): Color;

    /**
     * Creates a color from hue, saturation and lightness
     * 
     * Hue ranges from 0 - 360 (degrees)
     * Saturation and Lightness from 0 - 100
     * 
     * @example const seaGreen = Color.fromHSL(160, 50, 50);
     */
    static fromHSL(hue: number, saturation: number, lightness: number): Color;

    /**
     * Creates a random color
     * 
     * The colors are not fully random, they will range from 30 - 70% saturation and ligthness.
     */
    static random(): Color;

    /**
     * Converts the color to a hex string
     * 
     * @example Color.fromRGB(255, 0, 0).toHex() // -> "#ff0000"
     */
    toHex(): string;

    readonly red: number;
    readonly green: number;
    readonly blue: number;

    /**
     * Calculated brightness using Rec 709 weights.
     * 
     * The value ranges from 0 (black) - 255 (white)
     */
    readonly luma: number;

    /**
     * The contrasting text color (black or white), based on `luma`.
     * 
     * @example Color.yellow.contrastTextColor // -> Color.black
     * @example Color.blue.contrastTextColor // -> Color.white
     */
    readonly contrastTextColor: Color;

    /**
     * Default luucy color
     */
    static readonly luucyBrand: Color;

    static readonly black: Color;
    static readonly silver: Color;
    static readonly gray: Color;
    static readonly white: Color;
    static readonly maroon: Color;
    static readonly red: Color;
    static readonly purple: Color;
    static readonly fuchsia: Color;
    static readonly green: Color;
    static readonly lime: Color;
    static readonly olive: Color;
    static readonly yellow: Color;
    static readonly navy: Color;
    static readonly blue: Color;
    static readonly teal: Color;
    static readonly aqua: Color;
    static readonly orange: Color;
    static readonly aliceblue: Color;
    static readonly antiquewhite: Color;
    static readonly aquamarine: Color;
    static readonly azure: Color;
    static readonly beige: Color;
    static readonly bisque: Color;
    static readonly blanchedalmond: Color;
    static readonly blueviolet: Color;
    static readonly brown: Color;
    static readonly burlywood: Color;
    static readonly cadetblue: Color;
    static readonly chartreuse: Color;
    static readonly chocolate: Color;
    static readonly coral: Color;
    static readonly cornflowerblue: Color;
    static readonly cornsilk: Color;
    static readonly crimson: Color;
    static readonly cyan: Color;
    static readonly darkblue: Color;
    static readonly darkcyan: Color;
    static readonly darkgoldenrod: Color;
    static readonly darkgray: Color;
    static readonly darkgreen: Color;
    static readonly darkgrey: Color;
    static readonly darkkhaki: Color;
    static readonly darkmagenta: Color;
    static readonly darkolivegreen: Color;
    static readonly darkorange: Color;
    static readonly darkorchid: Color;
    static readonly darkred: Color;
    static readonly darksalmon: Color;
    static readonly darkseagreen: Color;
    static readonly darkslateblue: Color;
    static readonly darkslategray: Color;
    static readonly darkslategrey: Color;
    static readonly darkturquoise: Color;
    static readonly darkviolet: Color;
    static readonly deeppink: Color;
    static readonly deepskyblue: Color;
    static readonly dimgray: Color;
    static readonly dimgrey: Color;
    static readonly dodgerblue: Color;
    static readonly firebrick: Color;
    static readonly floralwhite: Color;
    static readonly forestgreen: Color;
    static readonly gainsboro: Color;
    static readonly ghostwhite: Color;
    static readonly gold: Color;
    static readonly goldenrod: Color;
    static readonly greenyellow: Color;
    static readonly grey: Color;
    static readonly honeydew: Color;
    static readonly hotpink: Color;
    static readonly indianred: Color;
    static readonly indigo: Color;
    static readonly ivory: Color;
    static readonly khaki: Color;
    static readonly lavender: Color;
    static readonly lavenderblush: Color;
    static readonly lawngreen: Color;
    static readonly lemonchiffon: Color;
    static readonly lightblue: Color;
    static readonly lightcoral: Color;
    static readonly lightcyan: Color;
    static readonly lightgoldenrodyellow: Color;
    static readonly lightgray: Color;
    static readonly lightgreen: Color;
    static readonly lightgrey: Color;
    static readonly lightpink: Color;
    static readonly lightsalmon: Color;
    static readonly lightseagreen: Color;
    static readonly lightskyblue: Color;
    static readonly lightslategray: Color;
    static readonly lightslategrey: Color;
    static readonly lightsteelblue: Color;
    static readonly lightyellow: Color;
    static readonly limegreen: Color;
    static readonly linen: Color;
    static readonly magenta: Color;
    static readonly mediumaquamarine: Color;
    static readonly mediumblue: Color;
    static readonly mediumorchid: Color;
    static readonly mediumpurple: Color;
    static readonly mediumseagreen: Color;
    static readonly mediumslateblue: Color;
    static readonly mediumspringgreen: Color;
    static readonly mediumturquoise: Color;
    static readonly mediumvioletred: Color;
    static readonly midnightblue: Color;
    static readonly mintcream: Color;
    static readonly mistyrose: Color;
    static readonly moccasin: Color;
    static readonly navajowhite: Color;
    static readonly oldlace: Color;
    static readonly olivedrab: Color;
    static readonly orangered: Color;
    static readonly orchid: Color;
    static readonly palegoldenrod: Color;
    static readonly palegreen: Color;
    static readonly paleturquoise: Color;
    static readonly palevioletred: Color;
    static readonly papayawhip: Color;
    static readonly peachpuff: Color;
    static readonly peru: Color;
    static readonly pink: Color;
    static readonly plum: Color;
    static readonly powderblue: Color;
    static readonly rosybrown: Color;
    static readonly royalblue: Color;
    static readonly saddlebrown: Color;
    static readonly salmon: Color;
    static readonly sandybrown: Color;
    static readonly seagreen: Color;
    static readonly seashell: Color;
    static readonly sienna: Color;
    static readonly skyblue: Color;
    static readonly slateblue: Color;
    static readonly slategray: Color;
    static readonly slategrey: Color;
    static readonly snow: Color;
    static readonly springgreen: Color;
    static readonly steelblue: Color;
    static readonly tan: Color;
    static readonly thistle: Color;
    static readonly tomato: Color;
    static readonly turquoise: Color;
    static readonly violet: Color;
    static readonly wheat: Color;
    static readonly whitesmoke: Color;
    static readonly yellowgreen: Color;
    static readonly rebeccapurple: Color;
}