import { courseData } from '../../mockdata/courseData';

const initial_state = {
    data: courseData
};

export const course=(state=initial_state, action)=>{

  switch(action.type){
    case 'add_course':
      return{
        ...state, 
        data: [
          ...state.data, {
            coursename: action.coursename,
            courseid: action.courseid,
          }
        ]
      }
    case 'delete_course':
      return{
        ...state,
        data: state.data.filter((d)=>{
          if(d.id === action.id)
            {return false }
          else
            {return true}
        })

      } 
    case 'create_course':
      return{
        ...state, 
        data: [
          ...state.data,{
            coursename: action.coursename,
            courseid: action.courseid,
          }
        ]

      } 
  }

}