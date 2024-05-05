import { useEffect, useMemo, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import countryList from "react-select-country-list";
import { isEqual } from "lodash";
import './country-select.scss';
import { CheveronDown } from "../../../../public/svg/svgFiles/onboard";

interface CountrySelectProps {
    label?: string;
    showError?: boolean;
    selectType?: string;
    alreadyCountries?: any[];
    selectedCountry?: string;
    value?: any;
    code?: string;
    onChange?: (value: any) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
    label = "",
    showError = false,
    selectType = "",
    alreadyCountries = [],
    selectedCountry = "",
    onChange,
}) => {
    const [mValues, setMvalues] = useState<any[]>(alreadyCountries);

    useEffect(() => {
        if (!isEqual(alreadyCountries, mValues)) {
            setMvalues(alreadyCountries);
        }
    }, [alreadyCountries]);

    const options = useMemo(() => countryList().getData(), []);

    const handleSelect = (code: string) => {
        const selectedOption = options.find(
            (optionItem) =>
                optionItem.value.toString().toLowerCase() ===
                code.toString().toLowerCase()
        );
        if (selectedOption) {
            if (selectType === "createJob") {
                const containsValue = mValues.some(
                    (item: any) => item.value === code
                );
                if (!containsValue) {
                    setMvalues([...mValues, selectedOption]);
                    onChange?.([...mValues, selectedOption]);
                }
            } else {
                setMvalues([...mValues, selectedOption]);
                onChange?.([...mValues, selectedOption]);
            }
        }
    };

    return (
        <div className="input-field">
            {mValues.map((mCountry: any, index: number) => (
                <p key={index}>{mCountry?.label}</p>
            ))}

            <div className={`sourcefy-forminput ${showError ? "erroractive" : ""}`}>
                <label>{label}</label>
                <div className="country-select">
                    <ReactFlagsSelect
                        searchable={true}
                        placeholder={selectedCountry ? selectedCountry : "Select Country"}
                        selected={selectedCountry}
                        onSelect={handleSelect}
                        className="input"
                    />
                    <div className="chevron-down"><CheveronDown /></div>
                </div>
                {selectedCountry === "" && <span className="error-message">Please select a country</span>}
            </div>
        </div>
    );
};

export default CountrySelect;
