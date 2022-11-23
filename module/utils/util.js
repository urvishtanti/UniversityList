import _ from "lodash";

export const sortedArray = (array) =>
  Object.values(_.sortBy(array, ["country", "name"]));
