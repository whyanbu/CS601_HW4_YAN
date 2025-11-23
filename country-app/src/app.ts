/**
 * MET CS601 - Assignment 4
 * Country Management System
 */

const output: HTMLElement | null = document.getElementById("output");

interface ICountry {
    name: string,
    getInfo(element: HTMLElement): HTMLElement
}

class RainyCountry implements ICountry {
    name: string;
    rainLevel: number;
    constructor(name: string, rainLevel: number) {
        this.name = name;
        this.rainLevel = rainLevel;
    }
    getInfo(element: HTMLElement): HTMLElement {
        const clone = element.cloneNode(true) as HTMLElement;
        clone.innerText = `${this.name} has a rain level of ${this.rainLevel} inches.`;
        return clone;
    }
}

class SnowyCountry implements ICountry {
    name: string;
    snowLevel: number;
    constructor(name: string, snowLevel: number) {
        this.name = name;
        this.snowLevel = snowLevel;
    }
    getInfo(element: HTMLElement): HTMLElement {
        const clone = element.cloneNode(true) as HTMLElement;
        clone.innerText = `${this.name} has a snow level of ${this.snowLevel} inches.`;
        return clone;
    }
}

class IslandCountry implements ICountry {
    name: string;
    landSize: number;
    constructor(name: string, landSize: number) {
        this.name = name;
        this.landSize = landSize;
    }
    getInfo(element: HTMLElement): HTMLElement {
        const clone = element.cloneNode(true) as HTMLElement;
        clone.innerText = `${this.name} has a land size of ${this.landSize.toLocaleString("en-US")} square miles.`;
        return clone;
    }
}

// Sample data
const countries: ICountry[] = [
    new RainyCountry("United States", 28),
    new SnowyCountry("Norway", 20),
    new RainyCountry("Brazil", 40),
    new IslandCountry("Japan", 145937),
    new SnowyCountry("Sweden", 30),
    new IslandCountry("Australia", 2968464)
];


let snowyCountriesList: SnowyCountry[] = [];

const isSnowyCountry = (country: ICountry): country is SnowyCountry => {
    return country instanceof SnowyCountry && typeof country.snowLevel === "number";
} 

snowyCountriesList = countries.filter(isSnowyCountry);

if (output) {
    
    const subtitle: HTMLElement = document.createElement('h2');
    subtitle.innerText = "All Countries";
    output.appendChild(subtitle);
    for (const country of countries) {
        output.appendChild(country.getInfo(document.createElement('div')));
    }
    
    subtitle.innerText = "Snowy Countries";
    output.appendChild(subtitle);
    for (const country of snowyCountriesList) {
        output.appendChild(country.getInfo(document.createElement('div')));
    }

    const element: HTMLElement = document.createElement('div');
    const total: number = snowyCountriesList.reduce((acc, country) => acc + country.snowLevel, 0);
    element.innerText = `Total snow level: ${total} inches`;
    output.appendChild(element);
}