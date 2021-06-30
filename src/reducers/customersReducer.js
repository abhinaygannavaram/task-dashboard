const customersIntialValue = []

const customersReducer = (state = customersIntialValue, action) => {
  switch(action.type){
    case "GET_CUSTOMERS" : {
      return [...action.payload]
    }
    default :{
      return state
    }
  }
}
export default customersReducer