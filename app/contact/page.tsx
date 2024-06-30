"use client"

import { SignupFormDemo } from '@/components/SignupFormDemo'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        ...formData,
      }),
    })

    const result = await res.json()

    if (result.success) {
      setFormStatus('Success! Your message has been sent.')
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } else {
      setFormStatus('Error! Please try again later.')
    }
  }

  return (
    <div className='mt-24'>
        <SignupFormDemo />
    </div>


  )
}

export default Contact;