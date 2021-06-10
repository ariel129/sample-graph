import apiProtected from "../config/api";

export async function propertyLists(token: string) {
  return apiProtected(token)
    .get("/property-data/lists")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return {
        status: 400,
        data: [],
        message: err,
      };
    });
}

export async function propertyView(id: number, token: string) {
  return apiProtected(token)
    .get(`/property-data/view/${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return {
        status: 400,
        data: [],
        message: err,
      };
    });
}
