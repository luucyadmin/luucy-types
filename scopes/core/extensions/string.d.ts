/** 
 * Extends the String prototype with a translate property
 */
interface String {
    /**
     * Translates a string into another locale
     * Can and should be chained.
     * 
     * The source string will be used for english and 
     * 
     * @example // Localized Label
     * new ui.Label(
     *     'Hello World!'
     *         .translate.german('Hallo Welt!')
     *         .translate.czech('Ahoj světe')
     * )
     */
    readonly translate: {
        /** Provides the German translation of the string. */
        german(text: string): string;
        /** Provides the Czech translation of the string. */
        czech(text: string): string;
        /** Provides the French translation of the string. */
        french(text: string): string;
        /** Provides the Italian translation of the string. */
        italian(text: string): string;
        /** Provides the Spanish translation of the string. */
        spanish(text: string): string;
    }
}
