import { useState } from "react";

const combineSpaces = (val: string) => {
  return val.replace(/\s+/g, " ")?.trim();
};

const validateFormValue = ({
  value = "",
  isRequired = true,
  minLength = 3,
  minLengthError = "",
  maxLength = undefined,
  maxLengthError = "",
  regex = /^/,
  regexError = "Value invalid",
}) => {
  if (!isRequired && !value) return { hasError: false, errorText: "" };

  if (combineSpaces(value).length < minLength) {
    return {
      hasError: true,
      errorText:
        minLengthError || `This field is required and must be at least ${minLength} digits`,
    };
  }

  if (combineSpaces(value).length > maxLength) {
    return {
      hasError: true,
      errorText: maxLengthError || `This field must be less than ${maxLength} digits`,
    };
  }

  if (regex && !new RegExp(regex).test(value)) {
    return {
      hasError: true,
      errorText: regexError,
    };
  }

  return { hasError: false, errorText: null };
};

interface valuesProps {
  value: string;
  isRequired?: boolean;
  maxLength?: number;
  minLength?: number;
  maxLengthError?: string;
  minLengthError?: string;
  regex?: RegExp;
  error?: string;
  hasError?: boolean;
  regexError?: string;
}

interface props {
  [key: string]: valuesProps;
}

const useForm = (initialValues: props) => {
  const [values, setValues] = useState<props>(initialValues);

  const handleChange = (name, value) => {
    const error = validateFormValue({
      value: value,
      isRequired: values[name].isRequired || true,
      maxLength: values[name].maxLength || undefined,
      maxLengthError: values[name].maxLengthError,
      minLength: values[name].minLength || 3,
      minLengthError: values[name].minLengthError,
      regex: values[name].regex,
      regexError: values[name].regexError,
    });

    setValues({
      ...values,
      [name]: {
        ...values[name],
        value: value,
        error: error.errorText,
        hasError: error.hasError,
      },
    });
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  const formHasError = () => {
    return Object.values(values).some((item) => {
      if (item?.hasError || (item.isRequired !== false && (item.value ?? "").trim().length === 0)) {
        return true;
      }

      return false;
    });
  };

  return {
    formValues: values,
    handleChange,
    formHasError,
    resetForm,
  };
};

export default useForm;
