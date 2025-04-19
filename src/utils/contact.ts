interface ContactFormData {
  name: string
  email: string
  message: string
  to: string
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || '发送失败')
    }

    return data
  } catch (error) {
    console.error('提交表单时出错：', error)
    throw error
  }
}
