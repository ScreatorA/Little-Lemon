export default function ProfileInformation({ imageSource, person, review }) {
  return (
    <>
      <div className='profileInformation'>
        <img src={imageSource} alt={`${person.name} Review`}></img>
        <p>{person.name}</p>
      </div>
      <div className='review'>
        <p>{review}</p>
      </div>
    </>
  );
}
