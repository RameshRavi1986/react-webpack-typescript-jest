import React from 'react';

export const Points:React.FC<{points:number}> = (props:{points:number}) =>{
return <div className='block points flex-center'>{props.points}</div>
}