<%-- 
    Document   : listarconsultas
    Created on : 22/05/2016, 17:18:12
    Author     : eliez
--%>
<%@page import="br.com.projetoestagio.util.Conversoes"%>
<%@page import="br.com.projetoestagio.model.Consulta"%>
<%@page import="br.com.projetoestagio.model.Paciente"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Paciente</title>
        <link href="../production/css/bootstrap.min.css" rel="stylesheet">

        <link href="../production/fonts/css/font-awesome.min.css" rel="stylesheet">
        <link href="../production/css/animate.min.css" rel="stylesheet">

        <!-- Custom styling plus plugins -->
        <link href="../production/css/custom.css" rel="stylesheet">
        <link href="../production/css/icheck/flat/green.css" rel="stylesheet">
        <link href="../production/css/datatables/tools/css/dataTables.tableTools.css" rel="stylesheet">


        <script src="../production/js/jquery.min.js"></script>
    </head>
    <body class="nav-md">
        <div class="container body">
            <div class="main_container">
                <%@include file="menupaciente.jsp" %>

                <!-- page content -->
                <div class="right_col" role="main">
                    <div class="">

                        <div class="clearfix"></div>

                        <div class="row">

                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="x_panel">
                                    <div class="x_title">
                                        <h2>Minhas Consultas Agendadas</h2>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="x_content">
                                        <table id="example" class="table table-striped responsive-utilities jambo_table">
                                            <thead>
                                                <tr class="headings">
                                                    <th>
                                                    </th>
                                                    <th>Nome Do Nutricionista </th>
                                                    <th>Data </th>
                                                    <th>Hora </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <%
                                                    Conversoes conv = new Conversoes();
                                                    List<Consulta> lista = (List<Consulta>) request.getAttribute("lista");
                                                    for (Consulta consulta : lista) {
                                                %>
                                                <tr class="even pointer">
                                                    <td class="a-center ">
                                                    </td>
                                                    <td><%=consulta.getNutricionista().getNomePessoa()%></td>
                                                    <td><%=conv.converterDataBr(consulta.getDataConsulta())%></td>
                                                    <td><%=consulta.getHoraConsulta()%></td>
                                                </tr>
                                                <%
                                                    }
                                                %>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                    <!-- footer content -->
                    <footer>
                        <div class="">
                            <p class="pull-right">
                                <span class="lead"> <i class="fa fa-paw"></i> NutriSIS</span>
                            </p>
                        </div>
                        <div class="clearfix"></div>
                    </footer>
                    <!-- /footer content -->

                </div>
                <!-- /page content -->
            </div>
        </div>

        <script src="../production/js/bootstrap.min.js"></script>

        <!-- chart js -->
        <script src="../production/js/chartjs/chart.min.js"></script>
        <!-- bootstrap progress js -->
        <script src="../production/js/progressbar/bootstrap-progressbar.min.js"></script>
        <script src="../production/js/nicescroll/jquery.nicescroll.min.js"></script>
        <!-- icheck -->
        <script src="../production/js/icheck/icheck.min.js"></script>

        <script src="../production/js/custom.js"></script>


        <!-- Datatables -->
        <script src="../production/js/datatables/js/jquery.dataTables.js"></script>
        <script src="../production/js/datatables/tools/js/dataTables.tableTools.js"></script>
        <script>
                                                                        $(document).ready(function () {
                                                                            $('input.tableflat').iCheck({
                                                                                checkboxClass: 'icheckbox_flat-green',
                                                                                radioClass: 'iradio_flat-green'
                                                                            });
                                                                        });

                                                                        var asInitVals = new Array();
                                                                        $(document).ready(function () {
                                                                            var oTable = $('#example').dataTable({
                                                                                "oLanguage": {
                                                                                    "sSearch": "Procurar:"
                                                                                },
                                                                                "aoColumnDefs": [
                                                                                    {
                                                                                        'bSortable': false,
                                                                                        'aTargets': [0]
                                                                                    } //disables sorting for column one
                                                                                ],
                                                                                'iDisplayLength': 12,
                                                                                "sPaginationType": "full_numbers",
                                                                                "dom": 'T<"clear">lfrtip',
                                                                                "tableTools": {
                                                                                    "sSwfPath": "<?php echo base_url('assets2/js/Datatables/tools/swf/copy_csv_xls_pdf.swf'); ?>"
                                                                                }
                                                                            });
                                                                            $("tfoot input").keyup(function () {
                                                                                /* Filter on the column based on the index of this element's parent <th> */
                                                                                oTable.fnFilter(this.value, $("tfoot th").index($(this).parent()));
                                                                            });
                                                                            $("tfoot input").each(function (i) {
                                                                                asInitVals[i] = this.value;
                                                                            });
                                                                            $("tfoot input").focus(function () {
                                                                                if (this.className == "search_init") {
                                                                                    this.className = "";
                                                                                    this.value = "";
                                                                                }
                                                                            });
                                                                            $("tfoot input").blur(function (i) {
                                                                                if (this.value == "") {
                                                                                    this.className = "search_init";
                                                                                    this.value = asInitVals[$("tfoot input").index(this)];
                                                                                }
                                                                            });
                                                                        });
        </script>
        ${script}
    </body>
</html>
