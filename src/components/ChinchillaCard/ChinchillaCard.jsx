import { Link } from 'react-router-m'

function ChinchillaCard({ chinchilla, randDogImgId, handleDeleteChinchilla, user }) {
  return (
    <div className="card">
      <img
        src={`https://picsum.photos/id/${randDogImgId}/640/480`}
        alt="A happy chinchilla"
        className="card-img-top"
      />
      <div className="card-body">
        <h2 className="card-text">{chinchilla.name}</h2>
        <p className="card-text">A {chinchilla.age}-year-old {chinchilla.breed}</p>
      </div>
      {
        user.profile === chinchilla.owner?._id ?
          <div className="card-footer">
            <Link
              className='btn btn-sm btn-warning'
              to='/edit'
              state={{ chinchilla }}
            >
              Edit
            </Link>
            <button
              className="btn btn-sm btn-danger m-left"
              onClick={() => handleDeleteChinchilla(chinchilla._id)}
            >
              Delete
            </button>
          </div>
          :
          <div className="card-body">
            <p className="card-text">- {chinchilla.owner?.name ? chinchilla.owner?.name : 'some person'}'s chinchilla</p>
          </div>
      }
    </div>
  )
}

export default ChinchillaCard