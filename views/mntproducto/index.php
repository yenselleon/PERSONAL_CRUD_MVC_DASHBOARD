<!DOCTYPE html>
<html lang="es">
  <head>
    <?php require_once("../mainHeader.php") ?>
    <title>Mantenimiento de Producto</title>
  </head>

  <body>

    <!-- ########## START: LEFT PANEL ########## -->
      <?php require_once("../mainLeftPanel.php") ?>
    <!-- ########## END: LEFT PANEL ########## -->

    <!-- ########## START: HEAD PANEL ########## -->
      <?php require_once("../mainLeftPanel.php") ?>
    <!-- ########## END: HEAD PANEL ########## -->

    <!-- ########## START: RIGHT PANEL ########## -->
      <?php require_once("../mainRightPanel.php") ?>
    <!-- ########## END: RIGHT PANEL ########## --->

    <!-- ########## START: MAIN PANEL ########## -->
    <div class="br-mainpanel">
      <div class="br-pageheader pd-y-15 pd-l-20">
        <nav class="breadcrumb pd-0 mg-0 tx-12">
          <a class="breadcrumb-item" href="index.html">Mantenimiento</a>
          <span class="breadcrumb-item active">Producto</span>
        </nav>
      </div><!-- br-pageheader -->
      <div class="pd-x-20 pd-sm-x-30 pd-t-20 pd-sm-t-30">
        <h4 class="tx-gray-800 mg-b-5">Producto</h4>
        <p class="mg-b-0">Desde esta ventana podra dar mantenimiento a productos</p>
      </div>

      <div class="br-pagebody">

        <!-- start you own content here -->

        <div class="br-section-wrapper">
          <h6 class="tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10">Mantenimiento de Producto</h6>
          <button class="btn btn-outline-primary btn-block mg-b-10" id="btnnuevo">Nuevo Registro</button>
          <p class="mg-b-25 mg-lg-b-50">Searching, ordering and paging goodness will be immediately added to the table, as shown in this example.</p>

          <div class="table-wrapper">
            <table id="producto_data" class="table display responsive nowrap">
              <thead>
                <tr>
                  <th class="wd-15p">Nombre</th>
                  <th class="wd-15p">Descripcion</th>
                  <th class="wd-15p"></th>
                  <th class="wd-20p"></th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
          </div>
        </div>

      </div><!-- br-pagebody -->

    </div><!-- br-mainpanel -->
    <!-- ########## END: MAIN PANEL ########## -->

    <?php require_once("./modalMantenimiento.php"); ?>

    <?php require_once("../mainScripts.php"); ?>
  </body>
</html>
