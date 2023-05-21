import { ref, reactive } from "vue";
import type { Ref } from "vue";


export const useSubscribe = () => {
    let isLoading = ref(false);
    const form = reactive({
        email: "",
    });

  async function subscribe() {
    isLoading.value = true
    
    await useFetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email: form.email }),
    })
    
    isLoading.value = false
   
    await navigateTo('/registered')
  }

  return {
    isLoading,
    form,
    subscribe,
  };
};