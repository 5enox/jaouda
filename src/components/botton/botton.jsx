import './botton.css'
import { Link } from 'react-router-dom'

function botton({content='Click Here',height='45',width='120',bgColor='#9e7d5f',fontSize='larger',linkeTo='/'}) {
    const style = {
        height:height,
        width:width,
        background:bgColor,
        fontSize:fontSize
    }
  return (
    <div style={style} className='class-button'><Link to={linkeTo}><p className='bottonparagraph'>{content}</p></Link></div>
  )
}

export default botton