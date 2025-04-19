import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json()
    const { name, email, message } = data

    // 验证必填字段
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: '所有字段都是必填的'
        }),
        {
          status: 400
        }
      )
    }

    // 创建一个测试账号
    const testAccount = await nodemailer.createTestAccount()

    // 创建一个可重用的传输器对象
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    })

    // 发送邮件
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: data.to, // 目标邮箱地址
      subject: '来自网站的联系表单消息',
      text: message,
      html: `
        <p><strong>姓名：</strong> ${name}</p>
        <p><strong>邮箱：</strong> ${email}</p>
        <p><strong>消息：</strong></p>
        <p>${message}</p>
      `
    })

    return new Response(
      JSON.stringify({
        message: '邮件发送成功',
        messageId: info.messageId,
        previewUrl: nodemailer.getTestMessageUrl(info)
      }),
      {
        status: 200
      }
    )
  } catch (error) {
    console.error('发送邮件时出错：', error)
    return new Response(
      JSON.stringify({
        message: '发送邮件时出错'
      }),
      {
        status: 500
      }
    )
  }
}
