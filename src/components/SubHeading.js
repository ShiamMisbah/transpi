const SubHeading = ({text, fontSize, color, fontWeight}) => {
    return ( 
        <div className={`subheading ${fontSize ? fontSize : 'text-base'} ${color ? color : 'text-red-500'} ${fontWeight ? fontWeight : 'font-semibold'}   my-4`}>{text}</div>
     );
}
 
export default SubHeading;