import { UserInputDataProps } from "@typings/data";

type UserInputProps = {
    data: UserInputDataProps;
    onChange: (key: string, newValue: string) => void;
};

export function UserInput({ data, onChange }: UserInputProps) {
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
                            onChange("initialInvestment", event.target.value)
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
                            onChange("annualInvestment", event.target.value)
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
                                onChange("expectedReturn", event.target.value)
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
                                onChange("duration", event.target.value)
                            }
                        />
                    </p>
                </div>
            </div>
        </section>
    );
}
