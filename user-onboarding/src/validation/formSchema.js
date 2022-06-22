import * as yup from 'yup'

const formSchema = yup.object().shape({
  first_name: yup.string().trim().required('First name is required.'),
  last_name: yup.string().trim().required('Last name is required.'),
  email: yup
    .string()
    .email('Must be a valid email.')
    .required('Email is required.'),
  password: yup
    .string()
    .required('Password is required.')
    .min(6, 'Password must be at least 6 characters long.'),
  tos: yup.boolean().oneOf([true], 'Must accept the terms of service.'),
})

export default formSchema
