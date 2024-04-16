import { UserInputDataProps } from "@typings/data";
import { useResults } from "./results.hook";
import { formatter } from "@util/investment";

type ResultProps = {
    input: UserInputDataProps;
};

export function Results({ input }: ResultProps) {
    const { resultsData, handleTotalInterest, handleTotalAmountInvested } =
        useResults({ input });

    const initialInvestment =
        resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment;

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(yearData => (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>
                            {formatter.format(
                                handleTotalInterest(
                                    yearData.valueEndOfYear,
                                    yearData.annualInvestment,
                                    yearData.year,
                                    initialInvestment,
                                ),
                            )}
                        </td>
                        <td>
                            {formatter.format(
                                handleTotalAmountInvested(
                                    yearData.valueEndOfYear,
                                    initialInvestment,
                                ),
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
