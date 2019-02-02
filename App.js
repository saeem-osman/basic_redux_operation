console.clear()


//action creator


const createPolicy = (name,amount) => {
  return {
    type : 'CREATE_POLICY',
    payload : {
      name : name,
      amount : amount
    }
  }
}

const deletePolicy = (name) => {
  return {
    type : 'DELETE_POLICY',
    payload : {
      name : name
    }
  }
}

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type : 'CREATE_CLAIM',
    payload : {
      name : name,
      amountOfMoneyToCollect : amountOfMoneyToCollect
    }
  };
};

//creating reducer

const claimHistory = (oldListOfClaims = [], action) =>{
  if(action.type === 'CREATE_CLAIM'){
    return [...oldListOfClaims, action.payload]
  }
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if(action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneytoCollect;
  }else if(action.type === 'CREATE_POLICY'){
    return bagOfMoney + action.payload.amount
  }
  return bagOfMoney;
}

const policies = (listOfPolicies = [], action) => {
  if(action.type === 'CREATE_POLICY'){
    return [...listOfPolicies ,action.payload.name];
  }else if(action.type === 'DELETE_POLICY'){
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
}

console.log(Redux)



const {createStore, combineReducers} = Redux;

const ourDepartments = combineReducers({
  accounting : accounting,
  claimHistory : claimHistory,
  policies : policies,
  
})

//creating store

const store = createStore(ourDepartments);


store.dispatch(createPolicy('Alex',40));
store.dispatch(createPolicy('Saeem',50));
store.dispatch(createPolicy('Rajon',20));
store.dispatch(createPolicy('Alam',60));
store.dispatch(createClaim('Saeem',50))
store.dispatch(createClaim('Alex',30))

//getting updated state

console.log(store.getState())
