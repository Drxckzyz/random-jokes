declare module "random-jokes" {
    export function getDadjoke(): Promise<string>;
    export function getPunchLine(): Promise<Punchline>;
    export function getRandomCHNJoke(): Promise<string>;
    export function getCategoryCHNJoke(): Promise<string>;
    export function matchChuckJoke(): Promise<Array<MatchedJoke>>;
    export function matchJoke(): Promise<Matchedjoke> | null;
    export function getRandomJoke(): Promise<Joke>;
    export function getRandomTrumpQuote(): Promise<TrumpQuote>;
    export function getFact(): Promise<string>;

    interface Punchline {
        setup: string;
        punchline: string;
    }

    interface MatchedJoke {
        joke: string
    }

    interface Matchedjoke {
        safe: boolean;
        setup: string;
        delivery: string
    }

    interface Joke {
        safe: boolean;
        joke: string;
    }

    interface TrumpQuote {
        quote: string;
        target?: string;
    }
}