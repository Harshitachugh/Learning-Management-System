const login_user='login_user'
export const login=(username,password) =>(dispatch)=>{
   dispatch ( {type:login_user ,
    username,
    password,
        
    }
)
}

const delete_user='delete_user'
export const logout=(id) =>(dispatch)=>{
   dispatch ( {type:delete_user ,
    id}
)
    
}

const add_course='add_course'
export const addcourse=(coursename,courseid) =>(dispatch)=>{
   dispatch ( {type:add_course ,
    coursename,
    courseid}
)
    
}

const create_course='create_course'
export const createcourse=(coursename) =>(dispatch)=>{
   dispatch ( {type:create_course ,
    coursename,
    courseid: Math.random()}
)
    
}

const delete_course='delete_course'
export const delcourse=(courseid) =>(dispatch)=>{
   dispatch ( {type:delete_course ,
    courseid}
)
}
