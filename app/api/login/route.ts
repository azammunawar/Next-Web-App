// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import * as jwt from 'jsonwebtoken';


export async function POST(req: NextRequest) {
  const data = await req.json();
  const {username, password} = data;

  if (username && password) {
    const accessToken = jwt.sign(username, "mysercret");
    cookies().set({
    name: 'token',
    value: accessToken,
    httpOnly: true,
    secure: true,
    // path: '/',
  })
  return  NextResponse.json({username, password});
  }
}
