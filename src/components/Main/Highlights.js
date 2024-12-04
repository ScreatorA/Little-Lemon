export default function Highlights() {
  return (
    <section className='highlights'>
      <div className='textContent'>
        <h2>This weeks Specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className='highlightCards'>
        <article className='greekSaladCard'>
          <img
            src='./images/Greek salad.jpg'
            alt='Greek salad'
            id='greekSalad'
          ></img>
          <p>Greek Salad</p>
          <p>
            A fresh and vibrant mix of crisp cucumbers, juicy tomatoes, red
            onions, Kalamata olives, and creamy feta cheese, tossed in our
            signature olive oil and lemon dressing.
          </p>
          <p>Order a delivery</p>
        </article>
        <article className='bruschettaCard'>
          <img
            src='./images/Bruschetta.jpg'
            alt='Bruschetta'
            id='bruschetta'
          ></img>
          <p>Greek Salad</p>
          <p>
            Toasted artisan bread topped with a medley of ripe tomatoes, fresh
            basil, and garlic, finished with a drizzle of balsamic glaze for the
            perfect bite.
          </p>
          <p>Order a delivery</p>
        </article>
        <article className='lemonDessert'>
          <img
            src='./images/Lemon Dessert.jpg'
            alt='Lemon Dessert'
            id='lemonDessert'
          ></img>
          <p>Lemon Dessert</p>
          <p>
            Indulge in our refreshing lemon dessert, featuring a tangy-sweet
            custard topped with whipped cream and a sprinkle of lemon zest.
          </p>
          <p>Order a delivery</p>
        </article>
      </div>
    </section>
  );
}
