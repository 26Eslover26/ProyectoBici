function consultar()

{
    $.ajax (
            {
                url         : 'https://geab7cc6b218cad-dbdatabaseact.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
                type        : 'GET',
                dataType    : 'json',

                success      : function (json)
                                    {
                                        console.log(json);
                                        pintar(json.items);
                                        $("#miId").val("");
                                        $("#brand").val("");
                                        $("#model").val("");
                                        $("#category").val("");
                                        $("#name").val("");
                                    },
                // error       : function (xhr, status)
                //                     {
                //                         console.log(xhr)
                //                     }
            }
    );
}

function insertar()
{
    let bici;

    bici = {
        id          : $("#miId").val(),
        brand       : $("#brand").val(),
        model       : $("#model").val(),
        category_id : $("#category").val(),
        name        : $("#name").val()
    }

    $.ajax (
            {
                url         : 'https://geab7cc6b218cad-dbdatabaseact.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
                type        : 'POST',
                data        : bici,

                success     : function (response)
                                    {
                                        console.log(response);
                                        consultar();
                                        $("#idDivConsulta").empty();
                                        alert("Guardado con éxito");
                                    },
                error       : function (xhr, status)
                                    {
                                        console.log(xhr);
                                    }
            }
    );
}

function borrar(idElemento)
{
    let bici;

    bici = {id : idElemento};

    let datosEnvio = JSON.stringify(bici);

    $.ajax (
            {
                url         : 'https://geab7cc6b218cad-dbdatabaseact.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
                type        : 'DELETE',
                data        : datosEnvio,
                contentType : 'application/json',

                success     : function (response)
                                    {
                                        console.log(response);
                                        $("#idDivConsulta").empty();
                                        consultar();
                                        alert("Eliminado con éxito")
                                    },
                // error       : function (xhr, status)
                //                     {
                //                         console.log(xhr);
                //                     }
            }
    );
}

function actualizar()
{
    bici = {
        id          : $("#miId").val(),
        brand       : $("#brand").val(),
        model       : $("#model").val(),
        category_id : $("#category").val(),
        name        : $("#name").val()
    };

    let datosEnvio = JSON.stringify(bici);

    $.ajax (
            {
                url         : 'https://geab7cc6b218cad-dbdatabaseact.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
                type        : 'PUT',
                data        : datosEnvio,
                contentType : 'application/json',

                success     : function (response)
                                    {
                                        console.log(response);
                                        $("#idDivConsulta").empty();
                                        consultar();
                                        alert("Actualizado con éxito")
                                    },
                // error       : function (xhr, status)
                //                     {
                //                         console.log(xhr);
                //                     }
            }
    );
}

function consultarId ()
{
    let codigo = $("#miId").val();

    $.ajax (
            {
                url         : 'https://geab7cc6b218cad-dbdatabaseact.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike/' + codigo,
                type        : 'GET',
                dataType    : 'json',

                success     : function (json)
                                    {
                                        console.log(json);
                                        $("#idDivConsulta").empty();
                                        pintar(json.items);
                                        $("#miId").val("");
                                        $("#brand").val("");
                                        $("#model").val("");
                                        $("#category").val("");
                                        $("#name").val("");
                                    },
                error       : function (xhr, status)
                                    {
                                        alert('Operación no satisfactoria' + xhr.status);
                                    },
            }
    );
}

function pintar(items)
{
    let tabla = "<table>";
    tabla += "<caption>Lista de Bicis</caption>";
    tabla += "<tr><th>Id</th><th>Marca</th><th>Modelo</th><th>Categoria</th><th>Nombre</th></tr>"
    for (i=0; i<items.length; i++)
        {
            tabla += "<tr>";
            tabla += "<td>" + items[i].id + "</td>";
            tabla += "<td>" + items[i].brand + "</td>";
            tabla += "<td>" + items[i].model + "</td>";
            tabla += "<td>" + items[i].category_id + "</td>";
            tabla += "<td>" + items[i].name + "</td>";
            tabla += "<td> <button onclick = 'borrar("+ items[i].id +")'> Eliminar </button>";
            tabla += "</tr>";
        }
    tabla += "</table>";
    $("#idDivConsulta").empty();
    $("#idDivConsulta").append(tabla);
}

function listar()
{
    $.ajax (
        {
            url         : 'https://geab7cc6b218cad-dbdatabaseact.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
            type        : 'GET',
            dataType    : 'json',

            success     : function (json)
                                {
                                    console.log(json);
                                    pintarC(json.items);
                                    $("#idC").val("");
                                    $("#nameC").val("");
                                    $("#email").val("");
                                    $("#age").val("");
                                }
        }
    );
}

function pintarC(items)
{
    let tabla = "<table>";
    tabla += "<caption> Lista de clientes </caption>";
    tabla += "<tr><th>Id</th><th>Nombre</th><th>E-mail</th><th>Edad</th></tr>";
    for (i=0; i<items.length; i++)
        {
            tabla += "<tr>";
            tabla += "<td>" + items[i].id + "</td>";
            tabla += "<td>" + items[i].name + "</td>";
            tabla += "<td>" + items[i].email + "</td>";
            tabla += "<td>" + items[i].age + "</td>";
            tabla += "<td> <button onclick = 'borrarC("+ items[i].id +")'> Eliminar </button>";
            tabla += "</tr>";
        }
    tabla += "</table>";
    $("#contenedorC").empty();
    $("#contenedorC").append(tabla);
}

function crearC()
{
    let cliente = {
        id      : $("#idC").val(),
        name    : $("#nameC").val(),
        email   : $("#email").val(),
        age     : $("#age").val()
    }

    $.ajax (
        {
            url         : 'https://geab7cc6b218cad-dbdatabaseact.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
            type        : 'POST',
            data        : cliente,

            success     : function (response)
                                {
                                    console.log(response);
                                    listar();
                                    $("#contenedorC").empty();
                                    alert("Guardado con éxito");
                                },
            error       : function (xhr,status)
                                {
                                    console.log(xhr);
                                }
        }
    );
}

function borrarC(idElemento)
{
    let persona = {id : idElemento};

    let datosEnvio = JSON.stringify(persona);

    $.ajax (
        {
            url         : 'https://geab7cc6b218cad-dbdatabaseact.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
            type        : 'DELETE',
            data        : datosEnvio,
            contentType : 'application/json',

            success     : function (response)
                                {
                                    console.log(response);
                                    $("#contenedorC").empty();
                                    listar();
                                    alert("Eliminado con éxito");
                                }
        }
    );
}

function actualizarC()
{
    let persona = {
        id      : $("#idC").val(),
        name    : $("#nameC").val(),
        email   : $("#email").val(),
        age     : $("#age").val()
    }

    let datosEnvio = JSON.stringify(persona);

    $.ajax (
        {
            url         : 'https://geab7cc6b218cad-dbdatabaseact.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
            type        : 'PUT',
            data        : datosEnvio,
            contentType : 'application/json',

            success     : function (response)
                                {
                                    console.log(response);
                                    $("#contenedorC").empty();
                                    listar();
                                    alert("Actualizado con éxito")
                                }
        }
    );
}

function consultarC()
{
    let codigo = $("#idC").val();

    $.ajax (
        {
            url         : 'https://geab7cc6b218cad-dbdatabaseact.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/' + codigo,
            type        : 'GET',
            dataType    : 'json',

            success     : function (json)
                                {
                                    console.log(json);
                                    $("#contenedorC").empty();
                                    pintarC(json.items);
                                    $("#idC").val("");
                                    $("#nameC").val("");
                                    $("#email").val("");
                                    $("#age").val("");
                                },
            error       : function (xhr, status)
                                {
                                    alert("Operación no satisfactoria" + xhr.status);
                                },
        }
    );
}

function ver()
{
    $.ajax (
        {
            url         : 'https://geab7cc6b218cad-dbdatabaseact.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
            type        : 'GET',
            dataType    : 'json',

            success     : function (json)
                                {
                                    console.log(json);
                                    pintarM(json.items);
                                    $("#idM").val("");
                                    $("#message").val("");
                                }
        }
    );
}

function pintarM(items)
{
    let tabla = "<table>";
    tabla += "<caption> Lista de mensajes </caption>";
    tabla += "<tr><th>Id</th><th>Mensaje</th></tr>";
    for (i=0; i<items.length; i++)
        {
            tabla += "<tr>";
            tabla += "<td>" + items[i].id + "</td>";
            tabla += "<td>" + items[i].messagetext + "</td>";
            tabla += "<td> <button onclick ='borrarM("+ items[i].id +")'> Eliminar </button>";
            tabla += "</tr>";
        }
    tabla += "</table>";
    $("#contenedorM").empty();
    $("#contenedorM").append(tabla);
}

function crearM()
{
    let mensaje = {
        id      : $("#idM").val(),
        messagetext : $("#message").val()
    }
    
    $.ajax (
        {
            url         : 'https://geab7cc6b218cad-dbdatabaseact.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
            type        : 'POST',
            data        : mensaje,

            success     : function (response)
                                {
                                    console.log(response);
                                    ver();
                                    $("#contenedorM").empty();
                                    alert("Guardado con éxito");
                                },
            error       : function (xhr, status)
                                {
                                    console.log(xhr);
                                }
        }
    );
}

function borrarM(idElemento)
{
    let mensaje = {id : idElemento};

    let datosEnvio = JSON.stringify(mensaje);

    $.ajax (
        {
            url         : 'https://geab7cc6b218cad-dbdatabaseact.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
            type        : 'DELETE',
            data        : datosEnvio,
            contentType : 'application/json',

            success     : function (response)
                                {
                                    console.log(response);
                                    $("#contenedorM").empty();
                                    ver();
                                    alert("Eliminado con éxito");
                                }
        }
    );
}

function actualizarM ()
{
    let mensaje = {
        id      : $("#idM").val(),
        messagetext : $("#message").val()
    }

    let datosEnvio = JSON.stringify(mensaje);

    $.ajax (
        {
            url         : 'https://geab7cc6b218cad-dbdatabaseact.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
            type        : 'PUT',
            data        : datosEnvio,
            contentType : 'application/json',

            success     : function (response)
                                {
                                    console.log(response);
                                    $("#contenedorM").empty();
                                    ver();
                                    alert("Actualizado con éxito")
                                }
        }
    );
}

function consultarM()
{
    let codigo = $("#idM").val();

    $.ajax (
        {
            url         : 'https://geab7cc6b218cad-dbdatabaseact.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/' + codigo,
            type        : 'GET',
            dataType    : 'json',

            success     : function (json)
                                {
                                    console.log(json);
                                    $("#contenedorM").empty();
                                    pintarM(json.items);
                                    $("#idM").val("");
                                    $("#message").val("");
                                },
            error       : function (xhr, status)
                                {
                                    alert("Operación no satisfactoria" + xhr.status);
                                },
        }
    );
}