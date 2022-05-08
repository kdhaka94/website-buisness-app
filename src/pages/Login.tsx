import React from 'react'
import Alert from '../components/ui/alert';
import Button from '../components/ui/buttton';
import Input from '../components/ui/input'
import { TOKEN } from '../utils/constants';
import { request } from '../utils/request';

export function Login() {
  const [creds, setCreds] = React.useState({
    mobileNumber: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreds({ ...creds, [e.target.name]: e.target.value })
  }

  const handleLogin = async () => {
    const data = await request({ uri: '/auth/signin', body: creds });
    if (data.error) {
      setErrorMsg(data.message)
    }

    if (data[TOKEN]) {
      localStorage.setItem(TOKEN, data[TOKEN]);
      window.location.href = '/';
    }
  }

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='flex-col items-center justify-center gap-2 w-1/3 border-2 p-5'>
        <h1 className='text-2xl font-semibold text-heading mb-3'>Login</h1>
        <Input type='text' label='Mobile Number' variant="outline" className="mb-4" value={creds.mobileNumber} onChange={handleChange} name={'mobileNumber'} />
        <Input label="Password" type='password' variant="outline" className="mb-4" value={creds.password} onChange={handleChange} name={'password'} />
        <Button onClick={handleLogin}>Submit</Button>

        {errorMsg ? (
          <Alert
            message={errorMsg}
            variant="error"
            closeable={true}
            className="mt-5"
            onClose={() => setErrorMsg("")}
          />
        ) : null}
      </div>
    </div>

  )
}
