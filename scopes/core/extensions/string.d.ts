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
        german(text: string): string;
        english(text: string): string;
        czech(text: string): string;
        french(text: string): string;
        italian(text: string): string;
        spanish(text: string): string;
    }
}
