import React from 'react';
import { STATE_DATA, DATA_YEARS } from '../data/dataLoader';
import { getScale } from '../data/dataLoader';
import './options.css';

const MapOptions = () => {
    let autoHandler: any = undefined;
    const [year, setYear] = React.useState("");
    const years = Object.keys(STATE_DATA['years']);
    const [auto, setAuto] = React.useState(false);

    React.useEffect(() => {
        let nodes = document.querySelectorAll('.leaflet-interactive');
        nodes.forEach((v: Element) => {
            let node = v as HTMLElement;
            let classes = v.classList;
            let yearIdx = DATA_YEARS.indexOf(year);
            let states = Object.keys(STATE_DATA['years'][yearIdx]).slice(1);
            let state = states.find((v) => classes.contains(v));
            
            if (state) {
                node.style.fill = getScale([255, 97, 158], [34, 117, 255], STATE_DATA['years'][yearIdx][state]);
            }
        })
    }, [year]);

    const shift = (direction: 'back' | 'forward') => {
        let idx = DATA_YEARS.indexOf(year);
        if (idx === -1) {
            return;
        }
        if (direction === 'back') {
            let newIdx = (idx - 1) % years.length;
            if (newIdx < 0) {
                newIdx += years.length;
            }
            setYear(DATA_YEARS[newIdx % years.length]);
        } else {
            setYear(DATA_YEARS[(idx + 1) % years.length]);
        }
    }

    const loadYear = () => {
        setYear(`${STATE_DATA['years'][0]['year']}`)
    }

    return (
        <div className="map-control control-root">
            <button id="map-left" className="pagination" onClick={() => shift('back')}>
                <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button id="map-right" className="pagination" onClick={() => shift('forward')}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
            <p>{year}</p>
            <div>
                <button onClick={loadYear}>Load data</button>
            </div>
        </div>

    )
}

export default MapOptions;