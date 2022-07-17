import { Button, css } from '@mui/material'
import { NextPage } from 'next'

const buttonStyle = css({
  fontSize: 100,
})

const sample: NextPage = () => {
  return (
    <>
      <h1>サンプルページ</h1>
      <Button variant='contained' css={buttonStyle}>
        ボタン
      </Button>
    </>
  )
}

export default sample
