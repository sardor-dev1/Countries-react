import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  Pagination,
  Button,
} from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCountries,
  setLoading,
  setError,
  selectCountry,
  unSelectCountry,
} from "../store/countriesSlice";
import LineChart from "../components/LineChart";
import { customTheme } from "../components/CustomTheme";

export default function Countries() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { countries, loading, selectedCountries } = useSelector(
    (store) => store.countries
  );

  useEffect(() => {
    async function fetchCountries() {
      dispatch(setLoading(true));
      dispatch(setError(null));

      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Error fetching countries");
        }
        const fetchedCountries = await response.json();
        dispatch(setCountries(fetchedCountries));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    }

    fetchCountries();
  }, [dispatch]);

  function handleSelectCountry(country, selected) {
    const selectedCountry = {
      cca2: country.cca2,
      name: country.name.common,
      population: country.population,
      flagURL: country.flags.png,
    };

    if (selected) {
      dispatch(unSelectCountry(country.cca2));
    } else {
      dispatch(selectCountry(selectedCountry));
    }
  }

  function isCountrySelected(cca2) {
    return selectedCountries.some((country) => country.cca2 === cca2);
  }

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <>
      <HeroSection />

      <div className="max-w-[800px] mx-auto my-5">
        <LineChart />
      </div>

      <div className="max-w-[1260px] mx-auto mt-4">
        <div className="w-full flex items-center justify-center">
          <Table striped theme={customTheme}>
            <TableHead>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Population</TableHeadCell>
              <TableHeadCell>Capital</TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Select</span>
              </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              {countries.map((country) => {
                const selected = isCountrySelected(country.cca2);
                return (
                  <Table.Row
                    key={country.cca2}
                    className="bg-white dark:border-gray-800 border-blue-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {country.name.common}
                    </Table.Cell>
                    <Table.Cell>{country.population}</Table.Cell>
                    <Table.Cell>{country.capital}</Table.Cell>
                    <Table.Cell>
                      <Button
                        color={selected ? "success" : "gray"}
                        onClick={() => handleSelectCountry(country, selected)}
                      >
                        {selected ? "unselect" : "select"}
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </TableBody>
          </Table>
        </div>
        <div className="w-full flex items-center justify-center mt-3 mb-5">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(countries.length / 10)}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </>
  );
}
