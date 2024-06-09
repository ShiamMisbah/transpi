const TextBody = ({text, fontSize, color, fontWeight, my, mx}) => {
    return ( 
        <div className={`bodyPara ${fontSize ? fontSize : ''} ${color ? color : 'text-gray-500'} ${fontWeight ? fontWeight : ''} ${my ? my : 'my-4'} ${mx ? mx : ''}`}>{text}</div>
     );
}
 
export default TextBody;