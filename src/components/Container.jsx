function Container ({item}){

    return(
        <section className="goods-container">
            {item.map((eachItem, i)=><div className="goods-item" key={i}>{eachItem}</div>)}
      </section>
    )
}
export default Container;