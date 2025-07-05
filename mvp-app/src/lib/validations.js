export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone) => {
  const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/\s/g, ""))
}

export const validatePassword = (password) => {
  const errors = []

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long")
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter")
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter")
  }
  if (!/\d/.test(password)) {
    errors.push("Password must contain at least one number")
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push("Password must contain at least one special character")
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export const validateSignupForm = (formData) => {
  const errors = []

  if (!formData.firstName.trim()) {
    errors.push({ field: "firstName", message: "First name is required" })
  }

  if (!formData.lastName.trim()) {
    errors.push({ field: "lastName", message: "Last name is required" })
  }

  if (!formData.email.trim()) {
    errors.push({ field: "email", message: "Email is required" })
  } else if (!validateEmail(formData.email)) {
    errors.push({ field: "email", message: "Please enter a valid email address" })
  }

  if (!formData.phone.trim()) {
    errors.push({ field: "phone", message: "Phone number is required" })
  } else if (!validatePhone(formData.phone)) {
    errors.push({ field: "phone", message: "Please enter a valid phone number" })
  }

  if (!formData.company.trim()) {
    errors.push({ field: "company", message: "Company name is required" })
  }

  if (!formData.password) {
    errors.push({ field: "password", message: "Password is required" })
  } else {
    const passwordValidation = validatePassword(formData.password)
    if (!passwordValidation.isValid) {
      errors.push({ field: "password", message: passwordValidation.errors[0] })
    }
  }

  if (!formData.confirmPassword) {
    errors.push({ field: "confirmPassword", message: "Please confirm your password" })
  } else if (formData.password !== formData.confirmPassword) {
    errors.push({ field: "confirmPassword", message: "Passwords do not match" })
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export const validateLoginForm = (formData) => {
  const errors = []

  if (!formData.email.trim()) {
    errors.push({ field: "email", message: "Email is required" })
  } else if (!validateEmail(formData.email)) {
    errors.push({ field: "email", message: "Please enter a valid email address" })
  }

  if (!formData.password) {
    errors.push({ field: "password", message: "Password is required" })
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

// export interface ValidationError {
//   field: string
//   message: string
// }

// export interface ValidationResult {
//   isValid: boolean
//   errors: ValidationError[]
// }
