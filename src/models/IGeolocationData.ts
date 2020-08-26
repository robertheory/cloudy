export default interface IGeolocationData {
  results: [
    {
      annotations: {
        UN_M49: {
          regions: {
            AMERICAS: string;
            BR: string;
            LATIN_AMERICA: string;
            SOUTH_AMERICA: string;
            WORLD: string;
          };
          callingcode: number;
          currency: {
            decimal_mark: string;
            html_entity: string;
            iso_code: string;
            iso_numeric: number;
            name: string;
            smallest_denomination: number;
            subunit: string;
            subunit_to_unit: number;
            symbol: string;
            symbol_first: number;
            thousands_separator: string;
          };
        };
      };
      components: {
        'ISO_3166-1_alpha-2': string;
        'ISO_3166-1_alpha-3': string;
        _category: string;
        _type: string;
        city: string;
        city_district: string;
        continent: string;
        country: string;
        country_code: string;
        county: string;
        neighbourhood: string;
        postcode: string;
        road: string;
        road_type: string;
        state: string;
        state_code: string;
        state_district: string;
        suburb: string;
      };
      confidence: number;
      formatted: string;
      geometry: {
        lat: number;
        lng: number;
      };
    },
  ];
}
