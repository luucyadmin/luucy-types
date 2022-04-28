declare namespace ui {
    class EnergyRating {
        /**
         * A++ rating
         */
        static APlusPlus: number;

        /**
         * A+ rating
         */
        static APlus: number;

        /**
         * A rating
         */
        static A: number;

        /**
         * B rating
         */
        static B: number;

        /**
         * C rating
         */
        static C: number;

        /**
         * D rating
         */
        static D: number;

        /**
         * E rating
         */
        static E: number;

        /**
         * F rating
         */
        static F: number;

        /**
         * G rating
         */
        static G: number;

        /**
         * Energy rating chart
         * 
         * The rating value can range from 1 (A) to 0 (G). 
         * Values over 1 will show A+, A++, ...; values under 0 will show G-
         * 
         * @example // energy rating for B
         * section.add(new ui.EnergyRating(ui.EnergyRating.B));
         * 
         * @example // energy rating based on calculation
         * const rating = 1 / someRatingMax * someRatingValue;
         * 
         * section.add(new ui.EnergyRating(rating));
         */
        constructor(rating?: number);

        /**
         * The rating value can range from 1 (A) to 0 (G). 
         * Values over 1 will show A+, A++, ...; values under 0 will show G-
         */
        rating: number;
    }
}