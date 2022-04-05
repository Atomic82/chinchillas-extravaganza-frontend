import styles from './ChinchillaList.module.css'
import ChinchillaCard from '../../components/ChinchillaCard/ChinchillaCard';

const chinchillaIds = [1025,1012,1062,1084,169,200,219,237,244,275,40,433,577,582,593,611,659,718,783,790,824,837,881,937,943]

const ChinchillaList = (props) => {
  return (
    <>
      <h1>Chinchilla List</h1>
      <div className={styles.container}>
        {props.chinchillas.map(chinchilla => (
          <ChinchillaCard
            key={chinchilla._id} 
            chinchilla={chinchilla} 
            randChinchillaImgId={chinchillaIds[Math.floor(Math.random()*(chinchillaIds.length))]}
            handleDeleteChinchilla={props.handleDeleteChinchilla}
            user={props.user}
          />
        ))}
      </div>
    </>
  );
}

export default ChinchillaList;