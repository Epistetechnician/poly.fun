import { Button, Frog, TextInput } from 'frog'
import { serveStatic } from 'frog/serve-static'

export const app = new Frog({
  basePath: '/api',
  // Supply a Hub to enable frame verification if needed
  // hub: neynar({ apiKey: 'YOUR_NEYNAR_API_KEY' })
})

// API routes
app.get('/features', (c) => c.json([
  { title: 'Responsive', description: 'Looks great on any device', icon: '📱' },
  { title: 'Interactive', description: 'Engaging user experiences', icon: '🖱️' },
  { title: 'Modern', description: 'Built with the latest technologies', icon: '🚀' },
]))

app.get('/config', (c) => c.json({
  title: 'Polyframe',
  description: 'A beautiful and functional framework for your ideas',
  theme: {
    primary: '#3B82F6',
    secondary: '#1F2937',
    accent: '#10B981',
  }
}))

// Frontend route
app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const action = inputText || buttonValue || 'Welcome'
  
  return c.res({
    image: (
      <div style={{
        alignItems: 'center',
        background: status === 'response' ? 'linear-gradient(to right, #3B82F6, #1F2937)' : '#1F2937',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        width: '100%',
      }}>
        <div style={{
          color: 'white',
          fontSize: 60,
          textAlign: 'center',
        }}>
          {status === 'response' ? `${action.toUpperCase()}!` : 'Welcome to Polyframe!'}
        </div>
      </div>
    ),
    intents: [
      <TextInput placeholder="Enter an action..." />,
      <Button value="build">Build</Button>,
      <Button value="create">Create</Button>,
      <Button value="innovate">Innovate</Button>,
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})

// Serve static files
app.use('/*', serveStatic({ root: './public' }))

export default app
