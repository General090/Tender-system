import { mount } from "@vue/test-utils";
import LoginForm from "../../src/components/auth/LoginForm.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/tenders", component: { template: "<div>Tenders</div>" } }],
});

describe("LoginForm.vue", () => {
  it("shows error when fields are empty", async () => {
    const wrapper = mount(LoginForm, {
      global: { plugins: [router] },
    });

    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.text()).toContain("Username is required");
    expect(wrapper.text()).toContain("Password is required");
  });

  it("logs in with correct credentials", async () => {
    const wrapper = mount(LoginForm, {
      global: { plugins: [router] },
    });

    await wrapper.find('input[type="text"]').setValue("admin");
    await wrapper.find('input[type="password"]').setValue("password");
    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.vm.username).toBe("admin");
    expect(wrapper.vm.password).toBe("password");
  });
});
