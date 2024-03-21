export default function Footer({items}) {
  if (!items.length) {
    return(
      <footer>
        <p>Start adding some items to your packing list 😉</p>
      </footer>
    );
  }
  let numList = items.length;
  let numPacked = items.filter((item) => item.packed === true).length;
  let percentPacked = Math.round((numPacked/numList) * 100);
  return(
    <footer>
       <p>{percentPacked === 100? "You've got everything!!! Ready to go 🚀" : `👜💼 You have ${numList} items on your list, and you already packed ${numPacked} (${percentPacked}%)`}</p>
    </footer>
   
  );
}