import React, { memo } from 'react';
import { Commentitemli } from '../assets/css/MusicSub';

const Commentitem = memo(({ user, i, commentremvebut }) => {
    return (
        <Commentitemli>
            <img src={`/img/userimg.png`} alt="" /><br/>
            <em className='username'> {i.username} </em> <br />
            <div className="commentbottom">
                <span className='text' > {i.text} </span>
                {user ?
                    (user.login_UserID === i.username ?
                        <button onClick={e => commentremvebut(i)} >삭제</button>
                        : <button>신고하기</button>)
                    : <button>신고하기</button>}
            </div>
        </Commentitemli>
    );
});

export default Commentitem;