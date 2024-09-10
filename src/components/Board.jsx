import Grogu from './Grogu';
function Board ({box}){
//const array=[null,null,null,null,null,null,null]
    return(
        <section className="board">
          {Array(7).fill(null).map((item,index)=>(
              <div key={index} className="cell">
                {index===box?<Grogu/> : null}
              </div>
          ))}
        
       
      </section>
    )
}
export default Board;