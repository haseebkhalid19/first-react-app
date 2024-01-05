import './App.css';

var App = () => {
  return (
    <>
      <h1 className="heading">TODO LIST</h1>
      <div className="container">
        <div className="topWrapper">
          <div>
            <button className="btn-addTask">Add Task</button>
          </div>
          <div>
            <select className='input-select'>
              <option>All</option>
            </select>
          </div>
        </div>
        <div className='todoListWrapper'>
          <ul>
            <li>
              <div className='d-flex'>
                <div>
                  <input type='checkbox' className='checkbox' />
                </div>
                <div>
                  <strong>create a react project</strong>
                  <p className='text-muted'>5:30 AM, 01/06/2022</p>
                </div>
              </div>
              <div>
                <button className='ms-3'>trash</button>
                <button className='ms-3'>edit</button>
              </div>
            </li>
            <li>
              <div className='d-flex'>
                <div>
                  <input type='checkbox' className='checkbox' />
                </div>
                <div>
                  <strong>create a react project</strong>
                  <p className='text-muted'>5:30 AM, 01/06/2022</p>
                </div>
              </div>
              <div>
                <button className='ms-3'>trash</button>
                <button className='ms-3'>edit</button>
              </div>
            </li>
            <li>
              <div className='d-flex'>
                <div>
                  <input type='checkbox' className='checkbox' />
                </div>
                <div>
                  <strong>create a react project</strong>
                  <p className='text-muted'>5:30 AM, 01/06/2022</p>
                </div>
              </div>
              <div>
                <button className='ms-3'>trash</button>
                <button className='ms-3'>edit</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App;
