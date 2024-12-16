import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const exportToPDF = (transactions) => {
  const doc = new jsPDF();

  // Title and headers
  doc.setFontSize(16);
  doc.text("Expense Tracker - Transactions Report", 14, 22);

  const tableColumn = ["Date", "Description", "Amount"];
  const tableRows = transactions.map((txn) => [
    txn.date,           // Date is already formatted
    txn.text,
    txn.amount.toFixed(2),
  ]);

  // Add table to the PDF
  doc.autoTable({
    startY: 30,
    head: [tableColumn],
    body: tableRows,
  });

  // Save the PDF
  doc.save("Expense_Report.pdf");
};