import ListProduct from "../components/ListProduct";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imageCarousel1 from "../assets/brownies.jpg";
import imageCarousel2 from "../assets/cheesestick.jpg";
import imageCarousel3 from "../assets/sagon_bakar_samping.jpg";

function CarouselIndex(props) {
  return (
    <div
      style={{ "--image-url": `url(${props.gambar})` }}
      className={`bg-center bg-cover bg-[image:var(--image-url)] bg-no-repeat bg-gray-800 bg-blend-multiply`}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {props.title}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          {props.description}
        </p>
      </div>
    </div>
  );
}
export default function IndexPage() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 525, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="min-h-full">
        <Carousel responsive={responsive}>
          <CarouselIndex
            gambar={imageCarousel1}
            title=" Putri's Home Cooking "
            description="Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth."
          />
          <CarouselIndex
            gambar={imageCarousel2}
            description="Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth."
            title=" Putri's Home Cooking "
          />
          <CarouselIndex
            gambar={imageCarousel3}
            description="Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth."
            title=" Putri's Home Cooking "
          />
        </Carousel>
      </section>
      <ListProduct />
    </>
  );
}
