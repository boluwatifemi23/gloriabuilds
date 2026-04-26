import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'
import twilio from 'twilio'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { firstName, lastName, email, phone, interest, message } = body

  try {
    // 1. Create lead in Freshsales
    await fetch(`https://${process.env.FRESHSALES_DOMAIN}/crm/sales/api/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token token=${process.env.FRESHSALES_API_KEY}`,
      },
      body: JSON.stringify({
        contact: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          mobile_number: phone,
        },
      }),
    })

    // 2. Send welcome email via SendGrid
    await sgMail.send({
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: 'Thank you for your interest in GloriaBuilds',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0D0D0D; color: #F5F0E8; padding: 40px;">
          <h1 style="color: #C9A84C; font-size: 28px; font-weight: 300;">GloriaBuilds</h1>
          <hr style="border-color: #C9A84C; opacity: 0.3; margin: 20px 0;" />
          <h2 style="font-weight: 300; font-size: 22px;">Dear ${firstName},</h2>
          <p style="color: #888880; line-height: 1.8;">
            Thank you for reaching out to GloriaBuilds. We have received your enquiry 
            regarding <strong style="color: #C9A84C;">${interest}</strong> and a member 
            of our sales team will contact you within 24 hours.
          </p>
          <p style="color: #888880; line-height: 1.8;">
            We look forward to helping you secure your perfect property.
          </p>
          <hr style="border-color: #333; margin: 30px 0;" />
          <p style="color: #C9A84C; font-size: 12px; letter-spacing: 2px;">GLORIABUILDS — WHERE LAND BECOMES LEGACY</p>
        </div>
      `,
    })

    // 3. Send SMS via Twilio
    await twilioClient.messages.create({
      body: `Hi ${firstName}, GloriaBuilds has received your enquiry about ${interest}. Our team will call you within 24 hours. Ref: GB${Date.now().toString().slice(-6)}`,
      messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID!,
      to: phone,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}