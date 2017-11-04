import stringArrayToLowerCase from './array_to_lowercase';

const createSortParameter = (queryValue, acceptedQueryValues) => {
  const lowercase = stringArrayToLowerCase(acceptedQueryValues);
  const sortQueryValues = queryValue.split(',');
  const parameter = {};
  for (let i = 0; i < sortQueryValues.length; i += 1) {
    const query = sortQueryValues[i].split('-');
    const field = query[query.length - 1];
    const index = lowercase.indexOf(field);
    let value;
    if (sortQueryValues[i].charAt(0) === '-') {
      value = -1;
    } else {
      value = 1;
    }
    parameter[acceptedQueryValues[index]] = value;
  }
  return parameter;
};

const createFilterParameter = (field, queryValue) => {
  const parameter = {};
  parameter[field] = queryValue;
  return parameter;
};

const createParameters = (query, options) => {
  const optionsKeys = Object.keys(options);
  const parameters = {};
  for (let i = 0; i < optionsKeys.length; i += 1) {
    if (query[optionsKeys[i]]) {
      if (options[optionsKeys[i]].type === Object) {
        parameters[optionsKeys[i]] = createSortParameter(query[optionsKeys[i]],
          options.sort.acceptedQueryValues);
      }
      if (options[optionsKeys[i]].type === Number) {
        parameters[optionsKeys[i]] = parseInt(query[optionsKeys[i]], 10);
      }
      if (options[optionsKeys[i]].type === String) {
        parameters[optionsKeys[i]] = createFilterParameter(optionsKeys[i], query[optionsKeys[i]],
          options[optionsKeys[i]].acceptedQueryValues);
      }
    } else {
      if (options[optionsKeys[i]].type === Object) {
        parameters[optionsKeys[i]] = options[optionsKeys[i]].defaultValue;
      }
      if (options[optionsKeys[i]].type === Number) {
        parameters[optionsKeys[i]] = options[optionsKeys[i]].defaultValue;
      }
      if (options[optionsKeys[i]].type === Number) {
        parameters[optionsKeys[i]] = options[optionsKeys[i]].defaultValue;
      }
    }
  }
  return parameters;
};

export default createParameters;
