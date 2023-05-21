import { reactive } from "vue";
import type { Ref } from "vue";

type Subscriber = {
    email: String
}
export const useSubscribe = () => {
    const form = reactive({
        email: "",
    });

  async function subscribe() {
    await useFetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email: form.email }),
    })
   
    await navigateTo('/registered')
  }

  return {
    form,
    subscribe,
  };
};