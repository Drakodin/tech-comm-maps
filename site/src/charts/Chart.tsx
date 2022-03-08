import React from 'react';
import { BarChart } from './Bar';

interface IChartProps {
    type: 'bar';   
}

export default class ChartContainer extends React.Component<IChartProps, {}> {
    constructor(props: IChartProps) {
        super(props);
    }

    render() {
        return (
            <>
                <BarChart maxTick={50.0} labels={["Non-hetero", "Heterosexual"]} data={[37.4, 17.1]}/>
                <div className="chart-expl">
                    <h3>Illicit Drug Use [5]</h3>
                    <ul>
                        <li>
                            Non-heterosexual individuals reported over two times the rate of illicit drug usage.
                        </li>
                        <li>
                            Multiplier: 2.187x
                        </li>
                    </ul>
                </div>
                <div className="chart-expl">
                    <h3>Illicit Drug Abuse [5]</h3>
                    <ul>
                        <li>
                            Drug abuse, otherwise known as "addiction", is an excessive use of illicit drugs such as cocaine or opiates.
                        </li>
                        <li>
                            Non-heterosexual individuals reported much higher rate of illicit drug abuse.
                        </li>
                        <li>
                            Multiplier: 1.936x
                        </li>
                    </ul>
                </div>
                <BarChart maxTick={50.0} labels={["Non-hetero", "Heterosexual"]} data={[15.1, 7.8]}/>
                <BarChart maxTick={5.0} labels={["Suicidal Transgender", "Non-suicidal Transgender", "Cisgender"]} data={[2.68, 1.84, 1.0]}/>
                <div>
                    <h3>Suicide Risk [4]</h3>
                    <ul>
                        <li>
                            A <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>transgender</span> individual is someone whose gender identity does not align with the one assigned to their sex at birth.
                        </li>
                        <li>
                            A <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>cisgender</span> individual is someone whose gender identity matches the one assigned to their sex at birth.
                        </li>
                        <li>
                            Suicide risks for a trans person who has attempted before is over two times that of a cisgender person.
                        </li>
                        <li>
                            Suicide risks for non-suicidal trans individuals are still close to two times as high.
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}