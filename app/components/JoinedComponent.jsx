import { Suspense } from 'react'
import JoinStreamUI from './JoinStreamUI'

const JoinedComponent = () => {
  return (
    <div>
        <Suspense fallback={<div>Call is not live yet </div>}>
            <JoinStreamUI />
        </Suspense>
    </div>
  )
}

export default JoinedComponent