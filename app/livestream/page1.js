'use client'
import { LivestreamLayout, StreamCall, StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk';

const apiKey = 'ayr4n3fueb58'; // the API key can be found in the "Credentials" section
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQWRhIn0.rKIIaizfR1jcb4AobcDUUhvP-T61h1mDJpuqGGYEOIk'; // the token can be found in the "Credentials" section
// const userId = 'REPLACE_WITH_bold-field-1'; // the user id can be found in the "Credentials" section
const callId = 'test-id'; // the call id can be found in the "Credentials" section

// set up the user object
const user = {
  id: "Ada",
  name: 'Adaeze',
  image: 'https://getstream.io/random_svg/?id=Ada&name=Ada',
};

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call('livestream', callId);

// make sure the viewer doesn't accidentally publish audio or video
call.camera.disable();
call.microphone.disable();

await call.join({ create: true })

const MyViewerApp = () => {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <LivestreamLayout showParticipantCount={true} showDuration={true} showLiveBadge={true} />
      </StreamCall>
    </StreamVideo>
  );
};

export default MyViewerApp