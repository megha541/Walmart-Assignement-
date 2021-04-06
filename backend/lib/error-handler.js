function errorHandler(error) {
  console.log(error);
  throw new Error("Server Operation Failure please try after some time");
}

module.exports = errorHandler;
