import { UserInputDataProps } from "@typings/data";
import { calculateInvestmentResults } from "@util/investment";

type useResultsProps = {
    input: UserInputDataProps;
};

export function useResults({ input }: useResultsProps) {
    const resultsData = calculateInvestmentResults(input);

    function handleTotalInterest(
        valueEnd: number,
        annualInvestment: number,
        year: number,
        initialInvestment: number,
    ) {
        return valueEnd - annualInvestment * year - initialInvestment;
    }

    function handleTotalAmountInvested(
        valueEnd: number,
        totalInterest: number,
    ) {
        return valueEnd - totalInterest;
    }

    return {
        resultsData,
        handleTotalInterest,
        handleTotalAmountInvested,
    };
}
