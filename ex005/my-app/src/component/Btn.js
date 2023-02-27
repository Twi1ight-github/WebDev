

function Btn(props) {

    const { vote, act, onChange,count } = props;

    const handleClick = () => {
        
        if (act === 'vote') {
            
            if (count >= 10) {
                alert("Cannot vote more")
            }
            else{
                onChange(prevCount => prevCount + 1)
            }

        }
        else {
            if (count <= 0){
                alert("Cannot unvote")
            }
            else{
                 onChange(prevCount => prevCount - 1)
            }
            
        }
        
    }
    
    
    return (
        <button id="vote-btn" onClick={handleClick}>{vote}</button>
        );
    }
    


export default Btn;