import { mount } from "@vue/test-utils";
import TenderList from "../../src/components/tender/TenderList.vue";

const mockTenders = [
  { id: 1, title: "Tender A", description: "Desc A", deadline: "2025-12-31" },
  { id: 2, title: "Tender B", description: "Desc B", deadline: "2025-11-30" },
];

describe("TenderList.vue", () => {
  it("renders a list of tenders", async () => {
    const wrapper = mount(TenderList, {
      props: { search: "" },
      global: {
        stubs: {
          TenderCard: {
            template: "<div>{{ tender.title }}</div>",
            props: ["tender"],
          },
        },
      },
    });

    wrapper.vm.tenders = mockTenders;
    wrapper.vm.loading = false;
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain("Tender A");
    expect(wrapper.text()).toContain("Tender B");
  });

  it("filters tenders by search", async () => {
    const wrapper = mount(TenderList, {
      props: { search: "Tender A" },
      global: {
        stubs: {
          TenderCard: {
            template: "<div>{{ tender.title }}</div>",
            props: ["tender"],
          },
        },
      },
    });

    wrapper.vm.tenders = mockTenders;
    wrapper.vm.loading = false;
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain("Tender A");
    expect(wrapper.text()).not.toContain("Tender B");
  });
});
