<template>
  <nav class="flex items-center justify-between bg-blue-600 px-6 py-4 shadow-md sticky top-0">
    <h1 class="text-white text-xl font-semibold tracking-wide">
      Tender Download System
    </h1>
    <button @click="$router.push('/login')" class="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition cursor-pointer">
      Login
    </button>
  </nav>

  <div class="flex flex-col items-center justify-center text-center min-h-screen px-5">
    <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
      Tender Download System
    </h1>
    <p class="text-gray-600 max-w-2xl leading-relaxed">
      A simple and user-friendly platform that allows users to easily browse, access, 
      and download tender documents. Stay updated with the latest opportunities, 
      view important details such as deadlines and descriptions, and manage your 
      tender search more efficiently.
    </p>
  </div>

</template>
