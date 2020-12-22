const encodeBase64 = (value) => {
  return new Buffer(value).toString("base64");
};

export { encodeBase64 };
