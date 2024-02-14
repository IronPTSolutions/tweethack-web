import { object, string } from 'yup';
import { useFormik } from 'formik';
import Input from "../components/Input";
import { register } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const userSchema = object({
  username: string().required('Required field'),
  email: string().email('Enter a valid email').required('Required field'),
  password: string().min(8, 'Password of at least 8 characters').required('Required field')
});

const Register = () => {
  const navigate = useNavigate()
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      register(values)
        .then(() => {
          navigate('/login')
        })
        .catch(err => console.error(err))
    },
    validationSchema: userSchema,
    validateOnBlur: true,
  })
  return (
    <div>
      <h1 className='text-tw-primary uppercase font-bold text-3xl underline'>Register your account</h1>

      <form onSubmit={handleSubmit}>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="username"
            label="User name"
            placeholder="Ex: 'manolitogafotas'"
            value={values.username}
            error={touched.username && errors.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="Ex: 'manolitogafotas@gmail.com'"
            value={values.email}
            error={touched.email && errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="Ex: '12345678'"
            value={values.password}
            error={touched.password && errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <button className="mt-4">Create account</button>
      </form>
    </div>
  )
}

export default Register;