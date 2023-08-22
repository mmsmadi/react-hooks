import { useState } from "react";

const useMiniForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return [values, handleChange, resetForm];
};

export default useMiniForm;

/*
 * USAGE
 *
 *
 *  const [values, handleChange, resetForm] = useMiniForm({ name: "", email: "" });
 *
 *  const handleSubmit = (event) => {
 *    event.preventDefault();
 *    console.log(values);
 *    resetForm();
 *  };
 *
 *  return (
 *    <form onSubmit={handleSubmit}>
 *      <input
 *        type="text"
 *        name="name"
 *        placeholder="Name"
 *        value={values.name}
 *        onChange={handleChange}
 *      />
 *      <input
 *        type="email"
 *        name="email"
 *        placeholder="Email"
 *        value={values.email}
 *        onChange={handleChange}
 *      />
 *      <button type="submit">Submit</button>
 *    </form>
 *  );
 */
