import React from 'react'

export default function UserInfor (props){
    // console.log(props);
    function goTodo(){
        props.history.push('/');
    }
    return (
        <div>
            {/* <topics/> */}
            <p>name:zhangsan</p>
            <p>id：{props.match.params.id}</p>
            <button onClick = {goTodo}>跳转到todolist</button>
        </div>
    )
}