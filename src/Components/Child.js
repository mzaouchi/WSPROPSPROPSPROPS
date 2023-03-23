import PropTypes from 'prop-types'; 
// const Child=(props)=>{
    const Child=({name,age,pays,user,track,handleHello,handleHi,show,children})=>{

    // console.log(props)
    return(
        // <div>
        //     <h2>Child Component</h2>
        //     <h3>My name is {props.name}</h3>
        //     <h3>My age is {props.age}</h3>
            
        //     <ul>
        //         {
        //             props.pays.map(el=><li>{el}</li>)
        //         }
        //     </ul>

        //     <h3>My name is {props.user.name}</h3>
        //     <h3>Code postale :  {props.user.city.cp}</h3>
            
        // </div>
        <div>
            <h2>Child Component</h2>
            <h3>My name is {name}</h3>
            <h3>My age is {age}</h3>
            {children}
            <ul>
                {
                    pays.map((el,i)=><li key={i}>{el}</li>)
                }
            </ul>

            <h3>My name is {user.name}</h3>
            <h3>Code postale :  {user.city.cp}</h3>
            <h3>{track}</h3>

            {
                show ? 
                <button onClick={handleHello}>Hello</button>
                :
                <button onClick={()=>handleHi("Mahmoud")}>Hi</button>
            }    

            
            
        </div>
    )
}

Child.defaultProps={
    name : "GOMYCODE",
    age : 99
}

Child.propTypes = {
    name: PropTypes.string
}

export default Child