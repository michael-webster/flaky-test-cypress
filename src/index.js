import React from 'react'
import ReactDOM from 'react-dom'
import './semantic-ui/semantic.min.css'
import './index.css'

import RemotePersist from './10-remote-persist.js'

const hideToast = JSON.parse(localStorage.getItem('hideToast') || 'false')
const showToast = !hideToast && Math.random() < 0.1
console.log({ hideToast, showToast })

ReactDOM.render(
  <div>
    {showToast && (
      <div className="toast-container">
        <div className="toast">
          <p>Some promotional deal 🎁</p>
          <button
            className="close-toast"
            onClick={() => {
              console.log('closing the toast')
              localStorage.setItem('hideToast', 'true')
              document.querySelector('.toast-container').style.visibility =
                'hidden'
            }}
          >
            Close
          </button>
        </div>
      </div>
    )}
    <div className="ui container">
      <RemotePersist />
    </div>
  </div>,
  document.getElementById('root'),
)
