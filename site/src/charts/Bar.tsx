import React from 'react';
import { scaleBar, yAxis } from './chartScale';
import './bars.css';
import { getScale } from './chartScale';

interface IBarProps {
    data: number[];
    maxTick: number;
    labels: string[];
}

interface IBarState {
    min: number;
    max: number;
    bars: number
}

export class BarChart extends React.Component<IBarProps, IBarState> {
    constructor(props: IBarProps) {
        super(props);
        this.state = {
            min: 0,
            max: 0,
            bars: 0
        }
        this.renderBars = this.renderBars.bind(this);
    }

    componentDidMount() {
        let max = this.props.data[0]
        let min = this.props.data[0]
        for (let v of this.props.data) {
            if (v > max) {
                max = v;
            }
            if (v < min) {
                min = v;
            }
        }
        this.setState({min: min, max: max, bars: this.props.data.length});
    }

    renderBars(): JSX.Element {
        return (
            <div className="bars">
                {this.props.data.map((v, i) => {
                    let scale = scaleBar(v);
                    return (
                        <div className="bar-wrapper">
                            <div key={`bar-${i}`} className={`bar bar-${i}`} style={{width: `${scale}%`, backgroundColor: getScale([255, 255, 255], [34, 117, 255], scale, 0, this.state.max)}}></div>
                            <div className="bar-spacer"></div>
                            <div style={{width: `${92.5 - scale}%`}}>{this.props.labels[i]}</div>
                        </div>                        
                    )
                })}
            </div>
        )
    }

    render() {
        return (
            <div className="bars-root">
                <div className="axis vert-axis">
                    {yAxis(this.props.maxTick).map((v, i, a) => (
                        <div style={{left: `${i/(a.length - 1) * 100.0}%`}} key={`tick-${i}`} className="axis-tick">
                            <div className="tick"></div>
                            {v}
                        </div>
                    ))}
                </div>
                {this.renderBars()}
            </div>
        )
    }
}