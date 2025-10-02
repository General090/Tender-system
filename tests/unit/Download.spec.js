import { mount } from "@vue/test-utils";
import TenderList from "../../src/components/tender/TenderList.vue";

const dummyTenders = [
  { id: 1, title: "Tender A", description: "Desc A", deadline: "2025-10-10" },
];

describe("Download button", () => {
  it("renders download button for each tender", () => {
    const wrapper = mount(TenderList, {
      props: { search: "" },
      data() {
        return { tenders: dummyTenders };
      },
    });
    const btn = wrapper.find("button");
    expect(btn.exists()).toBe(true);
    expect(btn.text()).toContain("Download");
  });
});
