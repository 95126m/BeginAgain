import { signInWithGoogleAndCreateUser } from '@/api/firebaseAuth'
import { useNavigate } from 'react-router-dom'
import signInImage from '@/assets/signIn.jpg'
import googleLogo from '@/assets/googleLogo.png'
import logo from '@/assets/logo.png'
import { css } from '@emotion/react'
import LongButton from '@/components/common/LongButton'
import theme from '@/styles/theme'

export default function SignIn() {
  const navigate = useNavigate()

  async function handleSignIn() {
    try {
      await signInWithGoogleAndCreateUser()
      navigate('/')
    } catch (error) {
      console.error('로그인 실패:', error)
    }
  }

  return (
    <div css={containerStyle}>
      <div css={contentStyle}>
        <img
          css={logoStyle}
          src={logo}
          alt="Logo"
        />
      </div>

      <div css={buttonStyle}>
        <LongButton onClick={handleSignIn}>
          <img
            src={googleLogo}
            alt="Google Logo"
            style={{ width: '20px', height: '20px' }}
          />
          Google 로그인
        </LongButton>
      </div>

      <div>
        <p css={signInText}>ⓒ MAZI. All Rights Reserved.</p>
      </div>
    </div>
  )
}

const containerStyle = css`
  position: relative;
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  background-color: ${theme.colors.white};
  height: 100%;
  overflow-y: auto;
  border: 1px solid ${theme.colors.grey};

  &::before {
    content: '';
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${signInImage});
    width: 500px;
    height: 1000px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
  }
`

const contentStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70%;
`
const buttonStyle = css`
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`

const logoStyle = css`
  position: absolute;
  top: 10%;
  left: 50%;
  height: 55px;
  width: 180px;
  transform: translate(-50%, -50%);
`

const signInText = css`
  color: ${theme.colors.grey};
  position: absolute;
  top: 78%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${theme.fontSize.sm};
`
