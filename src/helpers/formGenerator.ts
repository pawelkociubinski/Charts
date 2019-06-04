// Private
export const enhancements = {
  input: {
    error: "",
    isDirty: false,
    isFocused: false,
    isValid: false,
    value: "",
  },
  checkbox: {
    error: "",
    isDirty: false,
    isValid: false,
    value: false,
  },
  textarea: {
    error: "",
    isDirty: false,
    isFocused: false,
    isValid: false,
    value: "",
  },
}

// Public
export const generators = (schema) => {
  return {
    ...enhancements[schema.type],
    ...schema,
  };
}
