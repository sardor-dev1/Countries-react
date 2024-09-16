import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("selectedCountries");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.error("Could not load from localStorage", e);
    return [];
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("selectedCountries", serializedState);
  } catch (e) {
    console.error("Could not save to localStorage", e);
  }
};

const initialState = {
  selectedCountries: loadFromLocalStorage(),
};

const selectedCountriesSlice = createSlice({
  name: "selectedCountries",
  initialState,
  reducers: {
    addSelectedCountry: (state, action) => {
      const country = action.payload;
      if (!state.selectedCountries.some((c) => c.cca2 === country.cca2)) {
        state.selectedCountries.push(country);
        saveToLocalStorage(state.selectedCountries); 
      }
    },
    removeSelectedCountry: (state, action) => {
      const countryCode = action.payload;
      state.selectedCountries = state.selectedCountries.filter(
        (country) => country.cca2 !== countryCode
      );
      saveToLocalStorage(state.selectedCountries); 
    },
  },
});

export const { addSelectedCountry, removeSelectedCountry } =
  selectedCountriesSlice.actions;

export default selectedCountriesSlice.reducer;
