import ListProduct from "../components/ListProduct";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
    <section className="bg-gray-100 mt-20 px-10">
      <Carousel responsive={responsive}>
        <div className="flex justify-center items-center">
          <div className="overflow-hidden h-auto sm:h-96">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="absolute flex flex-col text-center justify-center z-30 gap-y-5">
            <h1 className="text-xl sm:text-3xl text-white shadow-xl uppercase underline ">
              Android Smartwatch
            </h1>
            <p>testting</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="overflow-hidden h-auto sm:h-96">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="absolute flex flex-col text-center justify-center z-30 gap-y-5">
            <h1 className="text-3xl text-white underline ">
              Android Smartwatch
            </h1>
          </div>
        </div>
      </Carousel>
      <ListProduct />
    </section>
  );
}
