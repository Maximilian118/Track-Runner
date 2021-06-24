export const updateForm = (e, form, setForm, formError, setFormError) => {
  setForm({...form, [e.target.name]: e.target.value})
  switch (e.target.name) {
    case "name": if (/^[a-zA-Z\s-']{1,30}$/.test(e.target.value) || e.target.value.trim() === "") {
      setFormError({
        ...formError,
        name: "",
      })
    } else {
      setFormError({
        ...formError,
        name: "Your name cannot contain numbers or special characters.",
      })
    }; break
    case "email": if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.target.value) || e.target.value.trim() === "") { // eslint-disable-line
      setFormError({
        ...formError,
        email: "",
      })
    } else {
      setFormError({
        ...formError,
        email: "Please enter a valid email address.",
      })
    }; break
    case "password": if (/^([a-zA-Z0-9!?_<>"'$£%^&(){};:+=*#]{8,20})$/.test(e.target.value) || e.target.value.trim() === "") {
      setFormError({
        ...formError,
        password: "",
      })
    } else {
      setFormError({
        ...formError,
        password: "Your password must have at least one letter and one number.",
      })
    }; break
    case "passConfirm": if (e.target.value === form.password || e.target.value.trim() === "") {
      setFormError({
        ...formError,
        passConfirm: "",
      })
    } else {
      setFormError({
        ...formError,
        passConfirm: "passwords do not match.",
      })
    }; break
    default: setFormError(formError)
  }
}

export const formValid = (form, formError) => {
  for (const keys in form) {
    if (form[keys] === "") {
      return false
    } else if (form[keys] === false) {
      return false
    }
  }

  let withErr = false
  for (const keys in formError) {
    if (formError[keys]) {
      withErr = true
    } 
  }

  return withErr ? false : true
}