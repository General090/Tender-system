import { mount } from "@vue/test-utils";
import TenderList from "../../src/components/tender/TenderList.vue";

const dummyTenders = [
  { id: 1, title: "Tender A", description: "Desc A", deadline: "2025-10-10" },
  { id: 2, title: "Tender B", description: "Desc B", deadline: "2025-11-11" },
];

describe("TenderList.vue", () => {
  it("renders a list of tenders", () => {
    const wrapper = mount(TenderList, {
      props: { search: "" },
      data() {
        return { tenders: dummyTenders };
      },
    });
    expect(wrapper.text()).toContain("Tender A");
    expect(wrapper.text()).toContain("Tender B");
  });

  it("filters tenders by search", async () => {
    const wrapper = mount(TenderList, {
      props: { search: "Tender A" },
      data() {
        return { tenders: dummyTenders };
      },
    });
    expect(wrapper.text()).toContain("Tender A");
    expect(wrapper.text()).not.toContain("Tender B");
  });
});
