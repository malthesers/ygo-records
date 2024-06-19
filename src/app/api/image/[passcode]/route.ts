import getS3CardImage from '@/services/aws/getS3CardImage'
import { NextRequest, NextResponse } from 'next/server'

interface GETParams {
  params: {
    passcode: string
  }
}

export async function GET(request: NextRequest, { params }: GETParams) {
  const imageUrl = await getS3CardImage(params.passcode, 'render')

  return Response.json(imageUrl)
}
