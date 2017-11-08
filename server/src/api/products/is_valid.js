import stringArrayToLowerCase from './array_to_lowercase';

const isValidIntegerQuery = string => !isNaN(parseInt(string, 10)) &&
  (parseInt(string, 10).toString() === string);

const isValidSortQuery = (string, acceptedQueryValues) => {
  const values = string.split('-');
  if (values.length !== 1 && values.length !== 2) return false;
  if (values.length === 2 && string.charAt(0) !== '-') return false;
  if (acceptedQueryValues.indexOf(values[values.length - 1]) === -1) return false;
  return true;
};

const isValidFilterQuery = (string, acceptedQueryValues) => {
  if (acceptedQueryValues.indexOf(string) === -1) return false;
  return true;
};

const isValidStringQueries = (string, acceptedQueryValues, isValid) => {
  const sortQueries = string.split(',');
  for (let i = 0; i < sortQueries.length; i += 1) {
    if (!isValid(sortQueries[i], acceptedQueryValues)) {
      return false;
    }
  }

  return true;
};

const hasFielsdOtherThanOptions = (query, options) => {
  const queryKeys = Object.keys(query);
  const optionsKeys = Object.keys(options);

  return queryKeys.some(k => optionsKeys.indexOf(k) <= -1);
};

const isAllFieldsValid = (query, options) => {
  const keys = Object.keys(query);
  for (let i = 0; i < keys.length; i += 1) {
    const field = keys[i];
    if (options[field].type === Number) {
      if (!isValidIntegerQuery(query[field])) {
        return false;
      }
    }
    if (options[field].type === Object) {
      if (!isValidStringQueries(query[field],
        stringArrayToLowerCase(options[field].acceptedQueryValues),
        isValidSortQuery)) {
        return false;
      }
    }
    if (options[field].type === String) {
      if (!isValidStringQueries(query[field],
        options[field].acceptedQueryValues,
        isValidFilterQuery)) {
        return false;
      }
    }
  }
  return true;
};

const isValidQuery = (query, options) => {
  if (hasFielsdOtherThanOptions(query, options)) return false;

  return isAllFieldsValid(query, options);
};

export default isValidQuery;
