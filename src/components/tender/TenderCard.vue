<script setup>
import { defineProps } from "vue";
import { jsPDF } from "jspdf";
import { toast } from "vue3-toastify";

const props = defineProps({
  tender: {
    type: Object,
    required: true,
  },
});

function sanitizeFilename(name) {
  return name.replace(/[^a-z0-9_\-\.]/gi, "_").toLowerCase();
}

function downloadPdf() {
  try {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 40;
    let y = 60;

    // Title
    doc.setFontSize(18);
    doc.setFont(undefined, "bold");
    const titleLines = doc.splitTextToSize(props.tender.title, pageWidth - margin * 2);
    doc.text(titleLines, margin, y);
    y += titleLines.length * 20;

    y += 6;
    doc.setDrawColor(200);
    doc.line(margin, y, pageWidth - margin, y);
    y += 14;

    // Description
    doc.setFontSize(12);
    doc.setFont(undefined, "normal");
    const descLines = doc.splitTextToSize(props.tender.description, pageWidth - margin * 2);
    doc.text(descLines, margin, y);
    y += descLines.length * 14 + 12;

    // Deadline
    doc.setFontSize(11);
    doc.setTextColor(80);
    doc.text(`Deadline: ${props.tender.deadline}`, margin, y);

    const filename = `${sanitizeFilename(props.tender.title)}.pdf`;
    doc.save(filename);

    toast.success("Tender downloaded successfully!", { autoClose: 3000 });
  } catch (err) {
    console.error("PDF generation failed", err);
    toast.error("Failed to download tender", { autoClose: 5000 });
  }
}
</script>

<template>
  <div class="bg-white shadow rounded-lg p-4">
    <h2 class="font-semibold text-lg">{{ tender.title }}</h2>
    <p class="text-gray-600 text-sm mt-2">{{ tender.description }}</p>
    <p class="text-red-500 text-xs mt-2">Deadline: {{ tender.deadline }}</p>
    <div class="flex gap-2 mt-5">
      <button
        @click="downloadPdf"
        class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 cursor-pointer"
      >
        Download
      </button>
    </div>
  </div>
</template>
