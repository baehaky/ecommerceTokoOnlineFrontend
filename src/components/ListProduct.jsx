export default function ListProduct() {
  return (
    <section className="">
      <h1>Our Product</h1>
      <div class="flex min-h-screen flex-wrap items-center justify-center">
        <div class="mx-5">
          <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
            <img
              class="w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
            />
            <p class="my-4 pl-4 font-bold text-gray-500">Product Name</p>
            <p class="mb-4 ml-4 text-xl font-semibold text-gray-800">$399</p>
          </div>
        </div>
        <div class="mx-5">
          <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
            <img
              class="w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
            />
            <p class="my-4 pl-4 font-bold text-gray-500">Product Name</p>
            <p class="mb-4 ml-4 text-xl font-semibold text-gray-800">$399</p>
          </div>
        </div>
      </div>
    </section>
  );
}
