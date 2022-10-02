export default function DefaultAccordion() {
  return (
    <div class="max-w-lg rounded-lg shadow-lg m-4 ">
      <div class="space-y-0 p-6">
        <h1 class="text-gray-800 text-xl capitalize">Default Accordion</h1>
        <p class="text-gray-400 text-sm ">This is default accordion</p>
      </div>
      <p class="border-b block"></p>
      <div class="p-6 space-y-6">
        {/* header one */}
        <div class="">
          <div>
            <a
              href="#"
              class="px-6 py-4 bg-sky-500 flex justify-between items-center rounded-md text-lg capitalize text-sky-100"
            >
              accordion header one
            <button class="text-xl accordionOne">-</button>
            </a>
          </div>
          <p
            id="targetOne"
            class="pt-4 pl-4 pr-4 text-gray-400"
          >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          </p>
        </div>
        {/* header two */}
        <div class="">
          <div>
            <a
              href="#"
              class="px-6 py-4 bg-sky-100 flex justify-between items-center rounded-md text-lg capitalize text-sky-400"
            >
              accordion header two
              <p class="text-xl">+</p>
            </a>
          </div>
          <p class="pt-4 pl-4 pr-4 text-gray-400">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          </p>
        </div>
        {/* header three */}
        <div class="">
          <div>
            <a
              href="#"
              class="px-6 py-4 bg-sky-100 flex justify-between items-center rounded-md text-lg capitalize text-sky-400"
            >
              accordion header three
              <p class="text-xl">+</p>
            </a>
          </div>
          <p class="pt-4 pl-4 pr-4 text-gray-400">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          </p>
        </div>
      </div>
    </div>
  );
}
