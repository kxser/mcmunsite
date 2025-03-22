<template>
  </template>
  
  <script setup>
console.log(isApplicationClosed())
  if (isApplicationClosed()){

    navigateTo("/");

  } else {
    navigateTo("https://docs.google.com/forms/d/e/1FAIpQLScSk5rGf-be80iHa8V1sUeyB3izui-magR5a9sjszklB00bHg/viewform?usp=header", {
        external: true
    })
  }
  </script>