 function CounterButtons({by,decrementConterFunction,IncrementConterFunction}){

    const [count,setcount] = useState(0);
      function  IncrementConterButtonFunction(){
       setcount(count+by);
       IncrementConterFunction(by);
       
      }
      function  decrementConterButtonFunction(){
       setcount(count-by);
       decrementConterFunction(by);
      }
      
 
     return (
        <div className="counter">
         <span className="count">{count}</span>
         <div>
         <button className="CounterButton" onClick={IncrementConterButtonFunction}>{by}</button>
         <button className="CounterButton" onClick={decrementConterButtonFunction}>-{by}</button>
         </div>
         </div>
     )
 }
 
 
 CounterButtons.propTypes = {
   by: PropTypes.number, // 'by' must be a number and is required
 };
 