import { Sheet, Stack } from '@mui/joy'

const Telegram = (props: { textColor: string }) => {
  const { textColor } = props
  return (
    <Sheet
      sx={{
        transform: 'none',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: '15px',
        borderTopRightRadius: '15px',
        borderTopLeftRadius: '15px',
        paddingLeft: 0,
        position: 'relative',
        opacity: 1,
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'flex-end',
        maxWidth: '464px',
        fontFamily: 'system-ui',
      }}
    >
      <Stack
        sx={{
          transform: 'scale(1) translateX(0)',
          opacity: 1,
          transition: '200ms ease-out',
          color: textColor === '#FFFFFF' ? '#ffff' : '#000000',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: '15px',
          borderTopRightRadius: '15px',
          borderTopLeftRadius: '15px',
          bgcolor: textColor === '#FFFFFF' ? '#0000' : '#ffff',
        }}
      >
        <Stack
          sx={{
            padding: '5px 8px 6px',
            bgcolor: textColor === '#FFFFFF' ? '#0000' : '#ffff',
            borderRadius: '6px 15px 15px 6px',
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            borderBottomRightRadius: '15px',
            fontSize: '16px',
          }}
        >
          <Stack
            sx={{
              minWidth: 0,
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '15px',
              borderBottomRightRadius: '15px',
            }}
          >
            <Stack
              sx={{
                margin: 0,
                whiteSpace: 'pre-wrap',
                lineHeight: 1.3125,
                textAlign: 'initial',
                borderRadius: '4px',
                position: 'relative',
                display: 'inline-block',
              }}
            >
              Today marks a special occasion. Telegram is celebrating its 10th
              anniversary! In honor of this milestone, and to highlight our web
              version's long-awaited parity with the native apps, we've leaped
              from version 1.x straight to 10.0. Big day! An experimental
              <br />
              <br />
              We've patched several problems, including issues with sending
              messages while uploading files, freezes while scrolling, and
              messages incorrectly marking as read with Web A in the background.
              See if you can spot the host of UI refinements we added as well
              <br />
              <br />
              We've implemented multiple memory and performance optimizations
              for a smoother, faster, more efficient Telegram experience.
              <span
                style={{
                  position: 'relative',
                  top: '6px',
                  bottom: 'auto !important',
                  right: 0,
                  float: 'right',
                  lineHeight: 1.35,
                  height: '16px',
                  marginLeft: '7px',
                  marginRight: '-8px',
                  background: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 4px',
                }}
              >
                <span
                  style={{
                    marginRight: '3px',
                    fontSize: '12px',
                    color: '#686c72bf',
                  }}
                >
                  10: 40
                </span>
              </span>
            </Stack>
          </Stack>
          <span
            style={{
              position: 'absolute',
              left: '-8.992px',
              overflow: 'hidden',
              bottom: '-1px',
              width: '9px',
              height: '18px',
              fontSize: '16px !important',
            }}
          >
            <span
              style={{
                clipPath: 'polygon(100% 9%,18% 100%,100% 100%)',
                width: '9px',
                height: '18px',
                display: 'block',
                backgroundColor: textColor === '#FFFFFF' ? 'black' : '#fff',
              }}
            ></span>
          </span>
        </Stack>
      </Stack>
    </Sheet>
  )
}

export default Telegram
