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
    console.log('form', form.email)

    await navigateTo('/registered')
  }

  return {
    form,
    subscribe,
  };
};