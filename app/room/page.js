"use client"
const Main = () => {
  return (
    <div>

        <form>
            <input type="text" onChange={(e) => sessionStorage.setItem("callId", e.target.value)}/> <br/>
            <input type="date" onChange={(e) => sessionStorage.setItem("scheduledDate", e.target.value)}/>
        </form>
    </div>
  )
}

export default Main