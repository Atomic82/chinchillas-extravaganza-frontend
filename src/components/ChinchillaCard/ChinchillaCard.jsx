import { Link } from 'react-router-dom'

function ChinchillaCard({ chinchilla, handleDeleteChinchilla, user }) {
  return (
    <div className="card">
      <img

        alt="A happy chinchilla"
        className="card-img-top"
      />
      <div className="card-body">
        <h2 className="card-text">{chinchilla.name}</h2>
        <p className="card-text">A {chinchilla.age}-year-old {chinchilla.breed}</p>
      </div>
      {console.log('user profile', user.profile)}
        {console.log('chinchilla owner', chinchilla.owner._id)}
      {
        
        user.profile === chinchilla.owner?._id ?
          <div className="card-footer">
            <button>
            <Link
              className='btn btn-sm btn-warning'
              to='/edit'
              state={{ chinchilla }}
            >
              Edit
            </Link>
            </button>
            <button
              className="btn btn-sm btn-danger m-left"
              onClick={() => handleDeleteChinchilla(chinchilla._id)}
            >
              Delete
            </button>
          </div>
          :
          <div className="card-body">
            <p className="card-text">- {chinchilla.owner?.name ? chinchilla.owner?.name : 'anonymous'}'s chinchilla</p>
          </div>
      }
    </div>
  )
}

export default ChinchillaCard