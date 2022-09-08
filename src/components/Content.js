
import styled from 'styled-components';
import LineItems from './LineItems';
const Content = ({ items, setItems ,handleCheck ,handleDelete}) => {
    return (
        <>
            <Wrapper>
                <ul>
                        {items.map((item) =>
                            <LineItems item={item} setItems={setItems} key={item.id} handleCheck={handleCheck} handleDelete={handleDelete}
                                
                            />
                        )}
                </ul>
    
            </Wrapper>
        </>
    )
}

export default Content


const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    

    ul{
        
        

        li{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding:10px 15px;
            color: white;
            background: black;
            margin: 15px 15px;
            border-radius:4px ;

            svg{
                font-size: 40px;
                margin-left: auto;

                &:hover{
                    color:yellow;
                }
            }

            label{
                margin-left: 10px;
                font-size: 25px;
                text-transform: uppercase;
            }
            

            input[type="checkbox"]{
                accent-color: yellow;
                width: 48px;
                height: 48px;
                line-height: 48px;
            }

            
        }
    }
`

