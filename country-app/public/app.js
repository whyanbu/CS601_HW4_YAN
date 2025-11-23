"use strict";
/**
 * MET CS601 - Assignment 4
 * Country Management System
 */
const output = document.getElementById("output");
class RainyCountry {
    constructor(name, rainLevel) {
        this.name = name;
        this.rainLevel = rainLevel;
    }
    getInfo(element) {
        const clone = element.cloneNode(true);
        clone.innerText = `${this.name} has a rain level of ${this.rainLevel} inches.`;
        return clone;
    }
}
class SnowyCountry {
    constructor(name, snowLevel) {
        this.name = name;
        this.snowLevel = snowLevel;
    }
    getInfo(element) {
        const clone = element.cloneNode(true);
        clone.innerText = `${this.name} has a snow level of ${this.snowLevel} inches.`;
        return clone;
    }
}
class IslandCountry {
    constructor(name, landSize) {
        this.name = name;
        this.landSize = landSize;
    }
    getInfo(element) {
        const clone = element.cloneNode(true);
        clone.innerText = `${this.name} has a land size of ${this.landSize.toLocaleString("en-US")} square miles.`;
        return clone;
    }
}
// Sample data
const countries = [
    new RainyCountry("United States", 28),
    new SnowyCountry("Norway", 20),
    new RainyCountry("Brazil", 40),
    new IslandCountry("Japan", 145937),
    new SnowyCountry("Sweden", 30),
    new IslandCountry("Australia", 2968464)
];
let snowyCountriesList = [];
const isSnowyCountry = (country) => {
    return country instanceof SnowyCountry && typeof country.snowLevel === "number";
};
const getSnowyCountry = (country) => {
    if (country.hasOwnProperty("snowLevel"))
        return country;
    return null;
};
snowyCountriesList = countries.filter(isSnowyCountry);
// .map(country => country as SnowyCountry);
if (output) {
    const subtitle = document.createElement('h2');
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
    const element = document.createElement('div');
    const total = snowyCountriesList.reduce((acc, country) => acc + country.snowLevel, 0);
    element.innerText = `Total snow level: ${total} inches`;
    output.appendChild(element);
}
