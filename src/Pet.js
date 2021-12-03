

const Pet = (props) => {
  return (
    <div>
      <h2 id="pet-name">{props.name}</h2>
      <h3 id="pet-type">{props.animal}</h3>
      <h3 id="pet-breed">{props.breed}</h3>
    </div>
  );
};

export default Pet;