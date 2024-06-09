const NavListGenerator = ({navPage}) => {
    return ( 
        <li className="flex items-center justify-between px-2 py-4 text-sm font-semibold">
            <span>{navPage.pageName}</span>
            {navPage.hasChild && <i className="fa-solid fa-greater-than text-xs"></i>}
        </li>
     );
}
 
export default NavListGenerator;