import Button from '../components/Button1'
import InputTextIcon from '../components/InputTextIcon';
import { IconUser, IconLock } from '@tabler/icons-react';
import catBody from '../assets/images/cat/body.png'
import catEye from '../assets/images/cat/eye.png'
import catLags from '../assets/images/cat/lags.png'

const LoginPage = () => {

    let eyeX = -6
    let eyeY = 4

    const onUsernameChange = (e) => {
        let temp = -6 + (e.target.value.length / 3)
        eyeX = (temp > 4) ? 4 : temp
        document.getElementById("cat-eye").style.translate = `${eyeX}px ${eyeY}px`
    }

    const onUsernameFocus = () =>{
        document.getElementById("cat-eye").style.translate = `${eyeX}px ${eyeY}px`
    }

    const onUsernameFocusOut = () => {
        document.getElementById("cat-eye").style.translate = "0 0"
    }

    const onPasswordFocus = () => {
        document.getElementById("cat-lags").style.transform = "rotateX(180deg)"
        document.getElementById("cat-lags").style.translate = "0 3rem"
    }

    const onPasswordFocusOut = () => {
        document.getElementById("cat-lags").style.transform = "rotateX(0deg)"
        document.getElementById("cat-lags").style.translate = "0 0"
    }

    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen bg-blue-50 bg-[url('./src/assets/images/cat-background.png')] bg-repeat  bg-contain">
                <div className="flex flex-col w-full h-full sm:max-w-[25rem] sm:max-h-[35rem] bg-[#f9c28a77] border-2 border-[#ffffff55] backdrop-blur-sm shadow-sm sm:shadow-2xl shadow-blue-600 rounded-2xl pt-2 pb-8" >
                    <div>
                        <div className="flex justify-center ">
                            <img id='cat-body' src={catBody} className="absolute h-[300px]" alt="cat" />
                            <img id='cat-eye' src={catEye} className="absolute h-[300px]" alt="cat" />
                            <img id='cat-lags' src={catLags} className="absolute h-[300px]" alt="cat" />
                        </div>
                    </div>
                    {/* <h1 className="text-6xl text-center mt-6 font-['Noto_Serif_Khojki'] text-[--color-1]">Login</h1> */}
                    {/* <space className="block flex-1 w-full"></space> */}
                    <InputTextIcon onFocus={onUsernameFocus} onBlur={onUsernameFocusOut} onChange={onUsernameChange} Icon={IconUser} title="Email" placeholder="example@abc.com" className="mt-auto px-4 sm:px-8 " />
                    <InputTextIcon type="password" onFocus={onPasswordFocus} onBlur={onPasswordFocusOut} Icon={IconLock} title="Password" placeholder="********" className="mt-5 px-4 sm:px-8" />

                    <div className='flex justify-center mt-5 px-8'>
                        <Button content="Login" id="login-btn" />
                    </div>


                </div>
            </div>
        </>
    )
}

export default LoginPage