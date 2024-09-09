function Container ({item}){

    return(
        <section className="goods-container">
            {item.map((eachItem)=><div className="goods-item">{eachItem}</div>)}
      </section>
    )
}
export default Container;