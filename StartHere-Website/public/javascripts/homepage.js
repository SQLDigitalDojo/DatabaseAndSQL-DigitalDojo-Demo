window.onload = function () {
    var ctx = document.getElementById('salesChart').getContext('2d');


    $.getJSON("/vendite/getSalesDates/", function (result) {
        var labelFromBK = [];
        $.each(result, function (key, value) {
            labelFromBK.push(value.data);
        })

        console.log(labelFromBK);

        $.getJSON("/vendite/getSalesChartInfo/", function (result) {
            var dataFromBK = [];
            $.each(result, function (key, value) {
                dataFromBK.push(value.guadagnoGiorno);
            })

            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: labelFromBK,
                    datasets: [{
                        label: 'Vedite',
                        backgroundColor: 'rgba(54, 162, 235)',
                        borderColor: 'rgba(54, 162, 235)',
                        data: dataFromBK
                    }]
                },

                // Configuration options go here
                options: {}
            });
        });
    });


    $.getJSON("/vendite/get/", function (result) {
        console.log(result);

        var c = [];
        $.each(result, function (i, item) {
            c.push("<tr><td>" + item.DataVendita + "</td>");
            c.push("<td>" + item.id + "</td>");
            c.push("<td>" + item.idClient + "</td>");
            c.push("<td>" + item.note + "</td>");
            c.push("<td  > <img src='images/delete.png' class='table-delete-img' id='" + item.id + "'> </td></tr>");

        });
        $('#sales-table').html(c.join(""));
    });

  };
  $(document).on('click', '.table-delete-img', function () {

    console.log("deleting: "+event.target.id );
    $.ajax({
        url: "/sales/delete",
        type: "POST",
        data: { id: event.target.id },
        success: function (html) {
            Swal.fire(
                'Eliminato!',
                'Hai eliminato la vendita',
                'success'
              )
        },
        error: function (html) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Qualcosa è andato storto'
              })
        }

    });
});
