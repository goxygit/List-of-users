import React from 'react';
import ok from './Users/assets/ok.png'
export const Success = ({ count }) => {
  return (
    <div className="success-block">
      <img src={ok} alt="Success" style={{width:'100px', height:'100px'}}/>
      <h3>Вдалося!</h3>
      <p>Усім {count} користувачам відправлене запрошення.</p>
      <button onClick={()=>{window.location.reload()}} className="send-invite-btn">Назад</button>
    </div>
  );
};
