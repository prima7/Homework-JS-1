class Convert {
    fromCelcius(ResultListItem, ValueFrom) {
      if (ResultListItem == "cel") {
        return ValueFrom;
      }
      if (ResultListItem == "fah") {
        return ValueFrom * (9 / 5) + 32;
      }
      if (ResultListItem == "rea") {
        return ValueFrom * (4 / 5);
      }
      if (ResultListItem == "kel") {
        return ValueFrom + 273.15;
      }
    }
    fromReamur(ResultListItem, ValueFrom) {
      if (ResultListItem == "rea") {
        return ValueFrom;
      }
      if (ResultListItem == "cel") {
        return ValueFrom * (5 / 4);
      }
      if (ResultListItem == "fah") {
        return ValueFrom * (9 / 4) + 32;
      }
      if (ResultListItem == "kel") {
        return (ValueFrom + 273.15) / 0.8;
      }
    }
    fromFahrenheit(ResultListItem, ValueFrom) {
      if (ResultListItem == "fah") {
        return ValueFrom;
      }
      if (ResultListItem == "cel") {
        return (ValueFrom - 32) * (5 / 9);
      }
      if (ResultListItem == "rea") {
        return (ValueFrom - 32) * (4 / 9);
      }
      if (ResultListItem == "kel") {
        return (ValueFrom - 32) * (5 / 9) + 273.15;
      }
    }
    fromKelvin(ResultListItem, ValueFrom) {
      if (ResultListItem == "kel") {
        return ValueFrom;
      }
      if (ResultListItem == "cel") {
        return ValueFrom - 273.15;
      }
      if (ResultListItem == "fah") {
        return (ValueFrom - 273.15) * (9 / 5) + 32;
      }
      if (ResultListItem == "rea") {
        return (ValueFrom - 273.15) * 0.8;
      }
    }
    
  }
module.exports = Convert;