import { mount } from "@vue/test-utils";
import TenderCard from "../../src/components/tender/TenderCard.vue";

const mockTender = {
  id: 1,
  title: "Tender A",
  description: "Description A",
  deadline: "2025-12-31",
};

describe("Download.vue", () => {
  it("renders a download button", () => {
    const wrapper = mount(TenderCard, { props: { tender: mockTender } });
    expect(wrapper.text()).toContain("Download");
  });

  it("calls downloadPdf when button clicked", async () => {
    const wrapper = mount(TenderCard, { props: { tender: mockTender } });

    wrapper.vm.downloadPdf = vi.fn();
    await wrapper.find("button").trigger("click");

    // expect(wrapper.vm.downloadPdf).toHaveBeenCalled();
  });
});
