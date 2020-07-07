export default function rotas(state = [], action){
//  console.log(state)
  switch(action.type) {
    case 'ADD_ROTAS':
      return [action.name] 
    default : 
      return state
  }
}