function validateBoolean(value: string | boolean): boolean {
  if (typeof value === 'boolean') {
    return value;
  }

  if (value.toLowerCase() === 'true') {
    return true;
  }

  return false;
}

export {
  validateBoolean,
}