import { useSelector } from "react-redux";
import { Carousel } from "flowbite-react";

export default function Index() {
  const selectedCountries = useSelector(
    (state) => state.selected.selectedCountries || []
  );

  const chunkArray = (array, size) => {
    if (!array || !Array.isArray(array)) {
      return [];
    }
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const countryChunks = chunkArray(selectedCountries, 4);

  return (
    <div>
      <div className="w-[800px] mx-auto">
        <div className="h-40 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            {countryChunks.length > 0 ? (
              countryChunks.map((chunk, index) => (
                <div key={index} className="flex items-center justify-center gap-5">
                  {chunk.map((country) => (
                    <div
                      key={country.cca2}
                      className="flex flex-col items-center"
                    >
                      <div>
                        <img
                        src={country.flagURL}
                        alt={`${country.name} flag`}
                        className="w-[150px] object-contain h-[150px]"
                      />
                      <p>{country.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p>Rasmlar Mavjud emas</p>
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
