import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/useActions";

const UserContainer = () => {
    const userData = useSelector((state) => state.user);
    const { loading, data, error } = userData;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    const renderUsers = () => {
        if (loading) return <p>loading...</p>
        if (!loading && error) return <p>{error}</p>
        if (userData && data)
            return (
                <div>
                    <h2>user list</h2>
                    {data.map(u => {
                        return <p key={u.id}>{u.name}</p>
                    })}
                </div>
            )
    }
    return (
        <div>
            {renderUsers()}
        </div>
    );
}

export default UserContainer;