import './paragraph.css'

function Paragraph({content ,margin ,width, padding, textAlign}) {
    const styles = {
        margin : margin,
        width : width,
        textAlign : textAlign,
        padding : padding
    }
  return (
    <p className='Paragraph' style={styles}>{content}</p>
  )
}

export default Paragraph;

