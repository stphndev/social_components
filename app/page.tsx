import { Box } from '@mui/joy'
import TelegramMessage from '@/components/TelegramMessage'

export default function Home() {
  return (
    <main>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <TelegramMessage />
      </Box>
    </main>
  )
}
