import React from 'react'
import {useHistory,useLocation,useParams,useRouteMatch} from 'react-router-dom';

export default function Hooks(props){
    let history = useHistory();
    let {id} = useParams();
    // console.log(props,history);

    return <div>
        hi!<h1>{id}</h1>
        <button onClick={()=>history.push('/topic/1')}>跳转到topic1</button>
    </div>

}
