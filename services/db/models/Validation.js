import moment from "moment";

class Validation {
  static methods = {};
  constructor(data) {
    this.name = data.name;
    this.data = data.data;
    this.error = data.error;
    this.message = data.message;
  }
}

Validation.methods.newMessage = (name, message, data) => {
  const validation = new Validation({
    name: name ? name : "New Message",
    data: data ? data : "",
    error: false,
    message: message ? message : "",
  });
  return validation;
};

Validation.methods.newError = (name, message) => {
  const validation = new Validation({
    name: name ? name : "New error",
    data: "",
    message: message ? message : "",
    error: true,
  });
  return validation;
};
Validation.methods.isQueryResponseEmpty = (data, name, message) => {
  //console.table(data.rows);
  let validation = new Validation({
    name: name ? name : "Query NOT Empty",
    data: data.rows,
    error: false,
    message: message ? message : "Query successfully",
  });
  if (validation.data == undefined) {
    validation.name = "Query Empty";
    validation.error = true;
    validation.data = validation.data;
    validation.message = "Query didn't find any result";
  }
  return validation;
};
Validation.methods.isValidDate = (date) => {
  const ComDate = `${date.year}-${date.month}-${date.day}`;
  const regex = new RegExp(
    "((?:19|20)[0-9][0-9])-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])",
    "g"
  );
  const validDate =
    moment(ComDate, "YYYY-MM-DD").isValid() && regex.test(ComDate);
  if (!validDate) {
    return new Validation({
      name: "Invalid date",
      message: "Dated input is not a valid date",
      data: false,
      error: true,
    });
  }

  return new Validation({
    name: "Date valid",
    message: "Date is a valid date",
    data: true,
    error: false,
  });
};

export { Validation };
