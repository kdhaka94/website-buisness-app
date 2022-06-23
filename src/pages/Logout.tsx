import { useEffect } from 'react'
import { TOKEN } from '../utils/constants'

export function Logout() {
  useEffect(() => {
    localStorage.removeItem(TOKEN)
    window.location.href = window.location.origin
  }, [])
  return (
    <div></div>
  )
}
