import React from 'react';
import Task from '../../components/Task/Task';
import useDataFetching from '../../Hooks/useDataFetching';
import './Backlog.css';

function Backlog(props) {

    const[Loading,error,tasks] = useDataFetching('https://my-json-server.typicode.com/MataGitUniat/myAPI/tasks');

    return (
        <div className="Backlog-wrapper">
            <h2>Backlog</h2>
            <div className="Task-wrapper">
            {Loading || error ? (
                <span>{error || 'loading...'}</span>
            ):(
                tasks.map((task) =>(
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        body={task.body}
                    />
                ))
            )
            }
            </div>
        </div>
    );
}

export default Backlog;