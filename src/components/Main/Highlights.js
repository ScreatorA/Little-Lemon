export default function Highlights() {
  return (
    <section className='highlights'>
      <div className='textContent'>
        <h2>This weeks Specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className='highlightCards'>
        <article className='article greekSaladCard'>
          <div className='highlightCardImage'>
            <img
              src='./images/Greek salad.jpg'
              alt='Greek salad'
              id='greekSalad'
            ></img>
          </div>
          <div className='highlightCardName'>
            <p>Greek Salad</p>
            <p>12.99$</p>
          </div>
          <div className='highlightCardDescription'>
            <p>
              A fresh and vibrant mix of crisp cucumbers, juicy tomatoes, red
              onions, Kalamata olives, and creamy feta cheese, tossed in our
              signature olive oil and lemon dressing.
            </p>
          </div>
          <div className='highlightCardOrderInformation'>
            <p>Order a delivery</p>
          </div>
        </article>
        <article className='article bruschettaCard'>
          <img
            src='./images/Bruschetta.jpg'
            alt='Bruschetta'
            id='bruschetta'
          ></img>
          <p>Greek Salad</p>
          <p>12.99$</p>
          <p>
            Toasted artisan bread topped with a medley of ripe tomatoes, fresh
            basil, and garlic, finished with a drizzle of balsamic glaze for the
            perfect bite.
          </p>
          <p>Order a delivery</p>
        </article>
        <article className='article lemonDessertCard'>
          <img
            src='./images/Lemon Dessert.jpg'
            alt='Lemon Dessert'
            id='lemonDessert'
          ></img>
          <p>Lemon Dessert</p>
          <p>12.99$</p>
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
