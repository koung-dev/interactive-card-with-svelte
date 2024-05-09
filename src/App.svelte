<script>
  import Form from "./Form.svelte";
  import Complete from "./Complete.svelte";
  import { cardDetails } from './store'

  let details= {}
  let confirmed = false

  cardDetails.subscribe(value =>{
      details = value
  })

  function handleFormSubmitted(){
    confirmed = true
  }
  console.log(details);
</script>

<main class="h-screen w-screen relative">
  <div class="lg:h-full lg:w-1/3 z-0 shadow-b h-[35%] w-full">
    <img src="/bg-main-desktop.png" alt="" class="h-full w-full object-cover">
  </div>
  
  <div class="z-10 absolute inset-0 h-full w-full flex lg:flex-row flex-col">
    <div class="lg:w-1/2 lg:h-full h-[41%]"> 
      <div class=" lg:mt-36 lg:ml-[200px] lg:w-[80%] lg:h-[68%] lg:static h-fit w-full">
        <div class="lg:ml-0 lg:h-64 lg:w-[75%] relative lg:box-border lg:mt-0 lg:z-0 z-20 mt-24 h-32 w-[75%] ml-6">
          <img src="/bg-card-front.png" alt="" class="h-full w-full object-cover rounded-lg">
          <div class="absolute lg:top-8 lg:left-8 top-2 left-4">
            <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/>
              <path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065
                    -4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 
                    10.065 4.51 10.065 10.075Z" stroke="#fff"/>
            </svg>
          </div>
          <div class="absolute lg:left-8 lg:bottom-16 left-4 bottom-8">
            <h2 class="text-white lg:text-xl text-sm">{details.creditCard}</h2>
          </div>
          <div class=" absolute lg:bottom-6 lg:right-8 lg:left-8 lg:text-sm bottom-2 left-4 right-4 justify-between flex items-center text-white text-[10px]">
            <h2 class="">{details.name}</h2>
            <h2 class="flex items-center justify-center">{details.month}/{details.year}</h2>
          </div>
        </div>
        <div class=" lg:h-64 lg:ml-24 lg:mt-8 lg:static lg:z-0 z-10 w-[75%] absolute h-32 ml-14 top-6  ">
          <img src="/bg-card-back.png" alt="" class="w-full h-full">
        </div>
      </div>
    </div>
    <div class="lg:w-1/2 lg:h-full lg:pl-28 lg:mt-0 lg:flex lg:items-center px-4 w-full mt-6 font-semibold text-xs"> 
      {#if confirmed}
      <Complete/>
      {:else}
        <Form on:submit={handleFormSubmitted}></Form>
      {/if} 
    </div>
  </div>
</main>


