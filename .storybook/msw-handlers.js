import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://swapi.dev/api/people/1/", () => {
    return HttpResponse.json({
      name: "Luke Skywalker (Mocked)",
      height: "111",
      mass: "11",
      hair_color: "mock blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
    });
  }),
];
