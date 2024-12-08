export default function Highlights() {
  return (
    <section className='highlights'>
      <div className='textContent'>
        <h2>This weeks Specials!</h2>
        <button className='buttonMenu'>Online Menu</button>
      </div>
      <div className='highlightCards'>
        <article className='article greekSaladCard'>
          <img
            src='./images/Greek salad.jpg'
            alt='Greek salad'
            id='greekSalad'
          ></img>
          <div className='menuInformation'>
            <div className='menu'>
              <p className='menuName'>Greek Salad</p>
              <p className='menuPrice'>10.99$</p>
            </div>
            <div className='cardDescription'>
              <p>
                A fresh and vibrant mix of crisp cucumbers, juicy tomatoes, red
                onions, Kalamata olives, and creamy feta cheese, tossed in our
                signature olive oil and lemon dressing.
              </p>
            </div>
            <div className='cardOrderInformation'>
              <p>Order a delivery</p>
              <img
                src='./icons_assets/Transfer Motorcycle.svg'
                alt='Transfer Motorcycle'
                id='transferMotorcycle'
              ></img>
            </div>
          </div>
        </article>
        <article className='article bruschettaCard'>
          <img
            src='./images/Bruschetta.jpg'
            alt='Bruschetta'
            id='bruschetta'
          ></img>
          <div className='menuInformation'>
            <div className='menu'>
              <p className='menuName'>Bruschetta</p>
              <p className='menuPrice'>4.99$</p>
            </div>
          </div>
          <div className='cardDescription'>
            <p>
              Toasted artisan bread topped with a medley of ripe tomatoes, fresh
              basil, and garlic, finished with a drizzle of balsamic glaze for
              the perfect bite.
            </p>
          </div>
          <div className='cardOrderInformation'>
            <p>Order a delivery</p>
            <img
              src='./icons_assets/Transfer Motorcycle.svg'
              alt='Transfer Motorcycle'
              id='transferMotorcycle'
            ></img>
          </div>
        </article>
        <article className='article lemonDessertCard'>
          <img
            src='./images/Lemon Dessert.jpg'
            alt='Lemon Dessert'
            id='lemonDessert'
          ></img>
          <div className='menuInformation'>
            <div className='menu'>
              <p className='menuName'>Lemon Dessert</p>
              <p className='menuPrice'>7.99$</p>
            </div>
          </div>
          <div className='cardDescription'>
            <p>
              Indulge in our refreshing lemon dessert, featuring a tangy-sweet
              custard topped with whipped cream and a sprinkle of lemon zest.
            </p>
          </div>
          <div className='cardOrderInformation'>
            <p>Order a delivery</p>
            <img
              src='./icons_assets/Transfer Motorcycle.svg'
              alt='Transfer Motorcycle'
              id='transferMotorcycle'
            ></img>
          </div>
        </article>
      </div>
    </section>
  );
}
