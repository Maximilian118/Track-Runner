export const updateForm = (e, form, setForm, setFormError) => {
  setForm({...form, [e.target.name]: e.target.value})
  switch (e.target.name) {
    case "name": if (/^[a-zA-Z\s-']{1,30}$/.test(e.target.value) || e.target.value.trim() === "") {
      setFormError("")
    } else {
      setFormError("Your name cannot contain numbers or special characters.")
    }; break
    case "email": if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.target.value) || e.target.value.trim() === "") { // eslint-disable-line
      setFormError("")
    } else {
      setFormError("Please enter a valid email address.")
    }; break
    case "password": if (/^([a-zA-Z0-9!?_<>"'$£%^&(){};:+=*#]{8,20})$/.test(e.target.value) || e.target.value.trim() === "") {
      setFormError("")
    } else {
      setFormError("Your password must have at least one letter and one number.")
    }; break
    case "passConfirm": if (e.target.value === form.password || e.target.value.trim() === "") {
      setFormError("")
    } else {
      setFormError("passwords do not match.")
    }; break
    default: setFormError("")
  }
}