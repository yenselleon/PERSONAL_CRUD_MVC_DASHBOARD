let tabla;

const init = ()=> {
    $("#producto_form").on("submit", function(e){
        guardaryeditar(e);
    });

}

function guardaryeditar(e) {
    e.preventDefault();
    let formData = new FormData($("#producto_form")[0]);

    $.ajax({
        url: "../../controller/producto.php?op=guardaryeditar",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function(datos){

            $('#producto_form')[0].reset();
            $("#modalmantenimiento").modal('hide');
            $('#producto_data').DataTable().ajax.reload();

            swal.fire(
                'Registro!',
                'El registro correctamente.',
                'success'
            )
        }
    });
}


$(document).ready(()=> {
    tabla=$('#producto_data').dataTable({
		"aProcessing": true,//Activamos el procesamiento del datatables
	    "aServerSide": true,//Paginación y filtrado realizados por el servidor
	    dom: 'Bfrtip',//Definimos los elementos del control de tabla
	    buttons: [
		            'copyHtml5',
		            'excelHtml5',
		            'csvHtml5',
		            'pdf'
		        ],
        "ajax":{
            url: '../../controller/producto.php?op=listar',
            type : "get",
            dataType : "json",
            error: function(e){
                console.log(e.responseText);	
            }
        },
		"bDestroy": true,
		"responsive": true,
		"bInfo":true,
		"iDisplayLength": 10,//Por cada 10 registros hace una paginación
	    "order": [[ 0, "asc" ]],//Ordenar (columna,orden)
	    "language": {
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch":         "Buscar:",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
		}
	}).DataTable();
    
    
});

function editar(prod_id) {
    $("#mdltitulo").html('Editar Registro');

    $.post("../../controller/producto.php?op=mostrar", {prod_id: prod_id},function(dataDB){
        data = JSON.parse(dataDB);
        $('#prod_id').val(data.prod_id);
        $('#prod_desc').val(data.prod_desc);
        $('#prod_nom').val(data.prod_nom);

    });

    $('#modalmantenimiento').modal('show');

}

function eliminar(prod_id) {

    Swal.fire({
        title: 'Crud',
        text: "Desea eliminar el registro?",
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'no',
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.isConfirmed) {
            
            $.post("../../controller/producto.php?op=eliminar",{prod_id: prod_id});

            $('#producto_data').DataTable().ajax.reload();
            
            Swal.fire(
                'Eliminado!',
                'El registro se elimino correctamente.',
                'success'
                )
            }
        })
}


$(document).on("click", "#btnnuevo", function(){
    $('mdltitulo').html('Nuevo Registro');
    $('#producto_form')[0].reset();
    $('#prod_id').val('');
    $('#modalmantenimiento').modal('show');
})

init();