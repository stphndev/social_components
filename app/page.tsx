import { Box } from '@mui/joy'
import TelegramMessage from '@/components/TelegramMessage'
import SlackMessage from '@components/SlackMessage'

export default function Home() {
  return (
    <main>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <TelegramMessage />
        <SlackMessage />
      </Box>
    </main>
  )
}
