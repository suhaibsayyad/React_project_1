import { FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';
const LineItems = ({ item, handleCheck ,handleDelete}) => {

    const myStyle = {
        textDecoration:'line-through'
    }
    return (

        

        <li>
            <input type="checkbox" checked={item.checked} onChange={()=>handleCheck(item.id)}/>
            <label style={ (item.checked ? myStyle : null)}>
                {item.title}
            </label>
            <FaTrashAlt role="button"
                tabIndex="0"
                onClick={()=>handleDelete(item.id)}
            />
        </li>





    )
}

export default LineItems