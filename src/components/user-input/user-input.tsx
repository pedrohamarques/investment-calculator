import { UserInputDataProps } from "@typings/data";

type UserInputProps = {
    data: UserInputDataProps;
    handleChange: (key: string, newValue: string) => void;
};

export function UserInput({ data, handleChange }: UserInputProps) {
    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label>Initial Investment</label>
                    <input
                        type='number'
                        required
                        value={data.initialInvestment}
                        onChange={event =>
                            handleChange(
                                "initialInvestment",
                                event.target.value,
                            )
                        }
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type='number'
                        required
                        value={data.annualInvestment}
                        onChange={event =>
                            handleChange("annualInvestment", event.target.value)
                        }
                    />
                </p>
                <div className='input-group'>
                    <p>
                        <label>Expected Return</label>
                        <input
                            type='number'
                            required
                            value={data.expectedReturn}
                            onChange={event =>
                                handleChange(
                                    "expectedReturn",
                                    event.target.value,
                                )
                            }
                        />
                    </p>
                    <p>
                        <label>Duration</label>
                        <input
                            type='number'
                            required
                            value={data.duration}
                            onChange={event =>
                                handleChange("duration", event.target.value)
                            }
                        />
                    </p>
                </div>
            </div>
        </section>
    );
}
