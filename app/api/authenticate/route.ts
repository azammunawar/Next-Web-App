// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import * as jwt from 'jsonwebtoken';


export async function GET(req: NextRequest) {
  const token = (cookies().get('token') || "").toString();
  let isAuthenticated =  401;
  jwt.verify(token, 'mysercret', function(err, decoded) {
    isAuthenticated = err ? 200 : 401
  });
  return  NextResponse.json({}, {status:isAuthenticated});
}
