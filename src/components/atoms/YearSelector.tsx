import { Combobox } from 'evergreen-ui';
import React, { useState } from 'react';

const YearSelector: React.FC = () => {
    const [beginYear, setBeginYear] = useState('1986');
    const currentYear = (new Date().getFullYear() - 1).toString();
    const [endYear, setEndYear] = useState(currentYear);
    const yearList = Array<string>();
    for (let index = 1986; index < new Date().getFullYear(); index++) {
        yearList.push(index.toString());
    }
    const [endYearList, setEndYearList] = useState(yearList);
    const changeBeginYear = (e: string) => {
        setBeginYear(e);
        setEndYearList(yearList.slice(yearList.indexOf(e)));
        if (e > endYear) {
            setEndYear(e);
        }
        localStorage.setItem('beginYear', e);
    };
    const changeEndYear = (e: string) => {
        setEndYear(e);
        localStorage.setItem('endYear', e);
    };

    return (
        <>
            <Combobox
                openOnFocus
                items={yearList}
                onChange={(selected) => changeBeginYear(selected)}
                placeholder="Startår"
                selectedItem={beginYear}
            />
            <Combobox
                openOnFocus
                items={endYearList}
                onChange={(selected) => changeEndYear(selected)}
                placeholder="Sluttår"
                selectedItem={endYear}
            />
        </>
    );
};

export default YearSelector;
