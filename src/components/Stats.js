//Calculates the % of remaining items to pack based on marked off items.
function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding items to your packing list.</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => {
    return item.packed === true;
  }).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are all set to go!"
          : `You have ${numItems} items on your list, and you already packed
          ${numPacked} items(${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
