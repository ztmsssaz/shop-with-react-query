import {useTranslation} from 'react-i18next'
import {useForm} from 'react-hook-form'
import {object, string} from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
// @ts-ignore
import {EyeOpen, EyeClose} from '../../components/ui/icons/icons'
import {useState} from 'react'

const LoginForm = () => {
  const {t} = useTranslation()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const validationSchema = object({
    username: string().required(t('required')).min(6, t('min_username')),
    password: string()
      .required(t('required'))
      .min(6, t('min_password'))
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d<>]).{6,}$/, t('invalid_password')),
  }).required()

  const {
    register,
    handleSubmit,
    formState: {errors},
  }: any = useForm({
    resolver: yupResolver(validationSchema),
  })

  const submitForm = (data: {username: string; password: string}) => {
    console.log('Login Data:', data)
  }

  return (
    <div className='flex items-center justify-center h-[85vh] bg-gray-100'>
      <form onSubmit={handleSubmit(submitForm)} className='bg-white p-6 rounded-lg shadow-lg w-80'>
        <h2 className='text-2xl font-bold text-center text-gray-700 mb-4 border-b border-slate-200 pb-2'>
          {t('login_page')}
        </h2>

        <div className='mb-4'>
          <label className='block text-gray-600'>{t('username')}</label>
          <div className='relative'>
            <input
              autoComplete='false'
              type='username'
              {...register('username')}
              className={`${
                errors.username && 'border border-red-500'
              } w-full text-slate-700 border rounded-lg text-center focus:ring-1 focus:ring-blue-400 outline-none p-2`}
            />
          </div>
          {errors.username && <p className='text-red-500 text-sm'>{errors.username.message}</p>}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-600'>{t('password')}</label>
          <div className='relative'>
            <input
              autoComplete='password'
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              className={`${
                errors.password && 'border border-red-500'
              } w-full text-slate-700 border rounded-lg text-center focus:ring-1 focus:ring-blue-400 outline-none p-2`}
            />
            {showPassword ? (
              <EyeOpen
                className='absolute cursor-pointer top-[50%] left-2 translate-y-[-50%]'
                onClick={() => setShowPassword(!showPassword)}
                size='20'
              />
            ) : (
              <EyeClose
                className='absolute cursor-pointer top-[50%] left-2 translate-y-[-50%]'
                onClick={() => setShowPassword(!showPassword)}
                size='20'
              />
            )}
          </div>
          {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
        </div>

        <button
          type='submit'
          className='w-full bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-900 transition'
        >
          {t('submit')}
        </button>
      </form>
    </div>
  )
}

export default LoginForm
