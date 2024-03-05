import { NextResponse } from 'next/server'
import { subscribeAuthEvents, web3auth } from "./lib/auth"
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  // console.log(request);
  const { nextUrl } = request
  // try {
  //   await web3auth.init();
  //   // setProvider(web3auth.provider);
  //   console.log("connecting")
  //   if (web3auth.connected) {
  //     console.log("connected")
  //   }
  // } catch (error) {
  //   console.error(error);
  // }
  // subscribeAuthEvents(web3auth)
  // console.log(nextUrl)
  // return NextResponse.redirect(new URL('/room', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/room',
}

// export const config = {
//     matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// }