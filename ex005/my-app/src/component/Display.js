import './Display.css'

function Display(props) {
    const { ct }=props;

    let modifieldCount = ct;

    if(ct === 10){
        modifieldCount = 'MAX'
    }
    else if(ct === 0){
        modifieldCount = 'MIN'
    }

    return (
        <div class="display">{modifieldCount}</div>
    );
}
export default Display;