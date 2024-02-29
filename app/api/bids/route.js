import { Server } from "socket.io" 
import { NextRequest, NextResponse } from "next/server";

// import { db } from "../../../lib/db"

// const SocketHandler = (req, res) => {
//   if (res.socket.server.io) {
//     console.log('Socket is already running')
//   } else {
//     console.log('Socket is initializing')
//     const io = new Server(res.socket.server)
//     res.socket.server.io = io

//   }
//   res.end()
// }

// export default SocketHandler

export function GET(req, res) {
    return NextResponse.json({data: "Hello world"});
}

export const config = {
    api: {
      bodyParser: false,
    },
  }

  export default function SocketHandler(req, res) {
    if (res.socket.server.io) {
      res.status(200).json({ success: true, message: "Socket is already running", socket: `:${PORT + 1}` })
      return
    }
  
    console.log("Starting Socket.IO server on port:", PORT + 1)
    //@ts-expect-error
    const io = new Server({ path: "/api/socket", addTrailingSlash: false, cors: { origin: "*" } }).listen(3001)
  
    io.on("connect", socket => {
      const _socket = socket
      console.log("socket connect", socket.id)
      _socket.broadcast.emit("welcome", `Welcome ${_socket.id}`)
      socket.on("disconnect", async () => {
        console.log("socket disconnect")
      })
    })
  
    res.socket.server.io = io
    res.status(201).json({ success: true, message: "Socket is started", socket: `:${PORT + 1}` })
  }