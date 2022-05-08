import React from 'react'
import Button from '../components/ui/buttton'
import Input from '../components/ui/input'
import { request } from '../utils/request'
import { MechantInfo } from '../utils/types'

export default function PaymentInfo() {
  const [info, setInfo] = React.useState<MechantInfo>({
    amount: "''",
    mid: "",
    mkey: ""
  })
  const [actions, setActions] = React.useState(0)
  React.useEffect(() => {
    (async () => {
      const data = await request({ uri: '/user/getPaymentInfo' });
      setInfo({
        ...info,
        ...data
      })

    })()
  }, [actions])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    let body = info;
    body.amount = parseFloat(body.amount).toFixed(2).toString()
    const data = await request({ uri: '/user/setPaymentInfo', body });
    setActions(actions + 1)
  }
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='flex-col items-center justify-center gap-2 w-1/3 border-2 p-5'>
        <h1 className='text-2xl font-semibold text-heading mb-3'>Payment Info</h1>
        <Input type='text' label='MID (Mechant ID)' variant="outline" className="mb-4"
          name={'mid'} value={info.mid} onChange={handleChange} />
        <Input label="MKEY (Merchant Key)" type='text' variant="outline" className="mb-4"
          name={'mkey'} value={info.mkey} onChange={handleChange} />
        <Input label="Amount" type='text' variant="outline" className="mb-4"
          name={'amount'} value={info.amount} onChange={handleChange} />

        <Button onClick={handleSubmit}>Submit</Button>


      </div>
    </div>
  )
}
