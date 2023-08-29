window.onload = function () {
    document.getElementById("download").addEventListener("click", () => {
        const invoice = this.document.getElementById("timetable");
        console.log(invoice);
        console.log(window);
        // var opt = {
        //     margin: 2,
        //     filename: 'myfile.pdf',
        //     image: {
        //         type: 'jpeg',
        //         quality: 0.98
        //     },
        //     html2canvas: {
        //         scale: 4
        //     },
        //     jsPDF: {
        //         unit: 'in',
        //         format: 'letter',
        //         orientation: 'landscape'
        //     }
        // };
        // html2pdf().from(invoice).set(opt).save();

        const pdf = new html2pdf()
        pdf.from(invoice)

        console.log("running function")

        pdf.from(table).outputPdf().then(output => { // Create a download link
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(output);
            downloadLink.download = 'table_data.pdf'; // Change the filename if needed
            downloadLink.textContent = 'Download PDF';

            // Append the download link to the document body
            document.body.appendChild(downloadLink);

            // Simulate a click on the link to trigger the download
            downloadLink.click();

            // Remove the link after the download
            document.body.removeChild(downloadLink);
        });
    })
}
