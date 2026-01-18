import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Handle Ringba/Retreaver call events
    const { event, callId, duration, disposition, callerNumber, timestamp } = body

    // Log call data (in production, you'd store this in a database)
    console.log('Call webhook received:', {
      event,
      callId,
      duration,
      disposition,
      callerNumber,
      timestamp,
    })

    // You can add additional processing here:
    // - Store in database
    // - Send notifications
    // - Update CRM
    // - Track conversions

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}

// Also handle GET for webhook verification
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const challenge = searchParams.get('challenge')

  if (challenge) {
    return NextResponse.json({ challenge })
  }

  return NextResponse.json({ status: 'ok' })
}
