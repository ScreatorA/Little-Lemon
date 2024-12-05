import Rating from "./Rating";
import { FourStarRating } from "./Rating";
import { ThreeStarRating } from "./Rating";
import ProfileInformation from "./ProfileInformation";

export default function Testimonials() {
  return (
    <section className='testimonials'>
      <article>
        <div className='profile'>
          <Rating />
          <ProfileInformation
            person={{ name: "Alisha" }}
            imageSource={"./images/Alisha.jpg"}
            review={"Review"}
          />
        </div>
      </article>
      <article>
        <div className='profile'>
          <FourStarRating />
          <ProfileInformation
            person={{ name: "Lorenz" }}
            imageSource={"./images/Lorenz.jpg"}
            review={"Review"}
          />
        </div>
      </article>
      <article>
        <div className='profile'>
          <ThreeStarRating />
          <ProfileInformation
            person={{ name: "Tanya" }}
            imageSource={"./images/Tanya.jpg"}
            review={"Review"}
          />
        </div>
      </article>
      <article>
        <div className='profile'>
          <Rating />
          <ProfileInformation
            person={{ name: "Chris" }}
            imageSource={"./images/Chris.jpg"}
            review={"Review"}
          />
        </div>
      </article>
    </section>
  );
}
