const Convert = require('./CountModules');
var conv = new Convert()

test ('Count From Celcius to Fahrenheit', () => {
    expect (conv.fromCelcius('fah',3)).toBe(37.4);
});

test ('Count From Fahrenheit to Kelvin', () => {
    expect (conv.fromFahrenheit('kel',1)).toBeCloseTo(255.928);
});

test ('Count From Kelvin to Celcius', () => {
    expect (conv.fromKelvin('cel',1)).toBe(-272.15);
});

test ('Count From Reamur to Celcius', () => {
    expect (conv.fromReamur('cel',1)).toBe(1.25);
});