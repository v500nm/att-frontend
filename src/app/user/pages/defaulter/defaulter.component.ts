import { Component } from '@angular/core';

@Component({
  selector: 'app-defaulter',
  templateUrl: './defaulter.component.html',
  styleUrls: ['./defaulter.component.scss']
})
export class DefaulterComponent {
  cols = [
    { field: "roll no", header: "Roll No" },
    { field: "name", header: "Name" },
    { field: "mobile no", header: "Mobile No" },
    { field: "quantity", header: "Class" },
    { field: "year", header: "Year" },
    { field: "percentage", header: "Percentage %" }
  ]
  products = [
    {
      "id": "1000",
      "roll no": "333",
      "name": "Adhan Mangaonkar",
      "mobile no": "9876543212",
      "quantity": "Bsc-IT",
      "year": "TYIT",
      "percentage": "60%"

    },
    {
      "id": "1001",
      "roll no": "370",
      "name": "Rohan Walke",
      "mobile no": "9876543213",
      "quantity": "Bsc-IT",
      "year": "TYIT",
      "percentage": "65%"
    },
    {
      "id": "1002",
      "roll no": "317",
      "name": "Shivam Gupta",
      "mobile no": "9876543214",
      "quantity": "Bsc-IT",
      "year": "TYIT",
      "percentage": "40%"
    },

  ]

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.products);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "products");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }

  exportPdf() {
    /* import("jspdf").then(jsPDF => {
       import("jspdf-autotable").then(x => {
         const doc = new jsPDF.default();
         //doc.autotTable(this.exportColumns, this.products);
         doc.save('products.pdf');
       })
     })*/
  }

}
