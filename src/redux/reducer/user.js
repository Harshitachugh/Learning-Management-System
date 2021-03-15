import { usersData } from '../../mockdata/usersData';



const initial_state = {
    loggedInUser: null,
    error: null,
    data: usersData
};

export const user =(state=initial_state, action)=>{

  switch(action.type){
    case 'add_user':
      return{
        ...state, 
        data: [
          ...state.data,{
            user_id: action.user_id,
            username: action.username,
            password: action.password,
            user_type: action.user_type
          }
        ],
        error: null

      }
    case 'delete_user':
      return{
        ...state,
        data: state.data.filter((d)=>{
          if(d.user_id === action.id)
            {return false }
          else
            {return true}
        })

      } 
    
    case 'login_user':
      let user = state.data.find((d) => d.username === action.username)
      if(user){
        if(user.password === action.password){
          return { ...state, loggedInUser: user, error: null }
        } else {
          return {...state, error: "Invalid Password"}
        }
      } 
      else {
        return {...state, error: "User not found, Please register!"}
  
  }

}
}
