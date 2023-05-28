<?php
$conn = new mysqli("localhost", "root", "", "hospital_project");
// if($conn)
// {
//     echo "Successful";
// }
?>

<div class="modal-body">
                    <div class="viewing_form_update">

                    </div>
                </div>
            </div>
        </div>
    </div>




    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.0.2/dist/chart.min.js"></script>


    <script>

        $(document).ready(function () {
            $('.view_btn').click(function (e) {
                e.preventDefault();

                var id = $(this).closest('tr').find('.dept_no').text();
                // alert(id);

                $.ajax({
                    type: "POST",
                    url: "update.php",
                    data: {
                        'checking_viewbtn': true,
                        'id_': id,
                    },
                    success: function (response) {
                        // alert(response);
                        $('.viewing_form_update').html(response);
                        $('#view_DataModal').modal('show');

                    }
                });
            });
        });
    </script>
