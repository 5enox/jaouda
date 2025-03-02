import './paragraph.css'

function Paragraph({content ,margin ,width, textAlign}) {
    const styles = {
        margin : margin,
        width : width,
        textAlign : textAlign
    }
  return (
    <p className='Paragraph' style={styles} >{content}</p>
  )
}

export default Paragraph;

