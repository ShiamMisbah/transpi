const Heading = ({text, fontSize, color, fontWeight, my, mx}) => {
    return ( 
        <div className={`heading ${fontSize ? fontSize : 'text-4xl'} ${color ? color : ''} ${fontWeight ? fontWeight : 'font-bold'} ${my ? my : 'my-4'} ${mx ? mx : ''}`}>{text}</div>
     );
}
 
export default Heading;