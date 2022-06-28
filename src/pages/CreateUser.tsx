import React from 'react'
import { Loader } from '../components/loader'
import Button from '../components/ui/buttton'
import Input from '../components/ui/input'
import { request } from '../utils/request'
import { UserCreateInput } from '../utils/types'

const userDefault = {
  username: "",
  mobileNumber: "",
  email: "",
  panNumber: "",
  gstNumber: "",
  addressOfBuisness: "",
  designation: "",
  startYear: "", tradeName: "",
  typeOfBuisness: "",
  isAccountVerified: true,
  isVerifiedByAdmin: true,
}

export default function CreateUser() {
  const [info, setInfo] = React.useState<UserCreateInput>({
    username: "",
    mobileNumber: "",
    email: "",
    panNumber: "",
    gstNumber: "",
    addressOfBuisness: "",
    designation: "",
    startYear: "", tradeName: "",
    typeOfBuisness: "",
    isAccountVerified: true,
    isVerifiedByAdmin: true,
  })
  const [loading, setLoading] = React.useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setLoading(true)
    let body = info;
    // body.amount = parseFloat(body.amount).toFixed(2).toString()
    try {
      const data = await request({ uri: '/user/signUpuser', body });
      setInfo(userDefault)
    } catch (err) {

    }
    setLoading(false)
  }
  return (
    <>
      {loading && <Loader />}
      <div className='w-full h-full flex items-center justify-center'>
        <div className='flex-col items-center justify-center gap-2 w-1/3 border-2 p-5'>
          <h1 className='text-2xl font-semibold text-heading mb-3'>User Info</h1>

          <Input type='text' label='Name' variant="outline" className="mb-4"
            name={'username'} value={info.username} onChange={handleChange} />
          <Input label="Mobile Number" type='text' variant="outline" className="mb-4"
            name={'mobileNumber'} value={info.mobileNumber} onChange={handleChange} />
          <Input label="Email" type='text' variant="outline" className="mb-4"
            name={'email'} value={info.email} onChange={handleChange} />
          <Input label="Trade Name" type='text' variant="outline" className="mb-4"
            value={info.tradeName} name={'tradeName'} onChange={handleChange} />
          <Input label="Designation" type='text' variant="outline" className="mb-4"
            name={'designation'} value={info.designation} onChange={handleChange} />
          <Input label="GST Number" type='text' variant="outline" className="mb-4"
            value={info.gstNumber} name={'gstNumber'} onChange={handleChange} />
          <Input label="PAN Number" type='text' variant="outline" className="mb-4"
            value={info.panNumber} name={'panNumber'} onChange={handleChange} />
          <Input label="Type Of Buisness" type='text' variant="outline" className="mb-4"
            value={info.panNumber} name={'panNumber'} onChange={handleChange} />
          <Input label="Area Of Buisness" type='text' variant="outline" className="mb-4"
            value={info.panNumber} name={'panNumber'} onChange={handleChange} />
          <Input label="Buisness Start Year" type='text' variant="outline" className="mb-4"
            value={info.panNumber} name={'panNumber'} onChange={handleChange} />
          <Input label="Address Of Buisness" type='text' variant="outline" className="mb-4"
            value={info.panNumber} name={'panNumber'} onChange={handleChange} />

          <Button onClick={handleSubmit}>Create User</Button>

        </div>
      </div>
    </>
  )
}
