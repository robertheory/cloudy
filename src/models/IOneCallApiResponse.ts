export default interface IWeatherResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    dt: Date;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: 10n;
      },
    ];
    rain: {
      '1h': number;
    };
  };
  minutely: [
    {
      dt: Date;
      precipitation: number;
    },
  ];
  hourly: [
    {
      dt: Date;
      temp: number;
      feels_like: number;
      pressure: number;
      humidity: number;
      dew_point: number;
      clouds: number;
      visibility: number;
      wind_speed: number;
      wind_deg: number;
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        },
      ];
      pop: number;
      rain: {
        '1h': number;
      };
    },
  ];

  daily: [
    {
      dt: number;
      sunrise: number;
      sunset: number;
      temp: {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
      };
      feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
      };
      pressure: number;
      humidity: number;
      dew_point: number;
      wind_speed: number;
      wind_deg: number;
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        },
      ];
      clouds: number;
      pop: number;
      rain: number;
      uvi: number;
    },
  ];
}
