// store/countriesSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Load selected countries from localStorage
const loadSelectedCountries = () => {
  const savedCountries = localStorage.getItem("selectedCountries");
  return savedCountries ? JSON.parse(savedCountries) : [];
};

const initialState = {
  countries: [],
  selectedCountries: loadSelectedCountries() || [], // Ensure it's an empty array if not available
  loading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    selectCountry: (state, action) => {
      state.selectedCountries.push(action.payload);
      localStorage.setItem(
        "selectedCountries",
        JSON.stringify(state.selectedCountries)
      );
    },
    unSelectCountry: (state, action) => {
      state.selectedCountries = state.selectedCountries.filter(
        (country) => country.cca2 !== action.payload
      );
      localStorage.setItem(
        "selectedCountries",
        JSON.stringify(state.selectedCountries)
      );
    },
  },
});

export const {
  setCountries,
  setLoading,
  setError,
  selectCountry,
  unSelectCountry,
} = countriesSlice.actions;

export default countriesSlice.reducer;
