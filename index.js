document.addEventListener("DOMContentLoaded", function () {
    const serviciosHolistic = [
        {
            id: "tarot",
            name: "Tarot",
            price: 6500,
            image: "https://d22fxaf9t8d39k.cloudfront.net/6fe858b6f1ac4e3e5cf890c0dd8880c6cd515a344dee082dba50e16f0a4a63ab156461.png",
        },
        {
            id: "rraa",
            name: "Registros Akáshicos",
            price: 6000,
            image: "https://d22fxaf9t8d39k.cloudfront.net/394ed90c20aa3e6cebdfa63367eed8c030f0d8196a0748c0754122452aeda777156461.png",
        },
        {
            id: "chakras",
            name: "Armon. de Chakras",
            price: 4500,
            image: "https://d22fxaf9t8d39k.cloudfront.net/6482215d1fe6e84e47ac8a1816b1a94206fdfc0d6883e5611af9cb25e0dcfffc156461.png",
        },
        {
            id: "lazosalma",
            name: "Lazos con el Alma",
            price: 8400,
            image: "https://d22fxaf9t8d39k.cloudfront.net/3038612c1d17a85826ec49928e9bcc574f86cad37583e5c4f8aeacc74a9131ba156461.png",
        },
        {
            id: "limpieza",
            name: "Limpieza Energética",
            price: 5800,
            image: "https://d22fxaf9t8d39k.cloudfront.net/e0a5d69683c34e6129d506ffc0fa1a0732c224b85b50a6e780a4bce208f2936a156461.png",
        },
    ];

    const serviciosContainer = document.querySelector(".servicios");
    const tarjetaFinalizacion = document.getElementById("tarjetaFinalizacion");

    function crearTemplate() {
        serviciosContainer.innerHTML = "";

        serviciosHolistic.forEach((productoItem) => {
            const { id, name, price, image } = productoItem;
            const productoTarjeta = `
                <div class="producto">
                    <img src="${image}" alt="${name}" />
                    <h2>${name}</h2>
                    <p>Precio: $${price}</p>
                    <button class="btnAgregar" data-servicio="${name}">Reservar Turno</button>
                </div>
            `;
            serviciosContainer.innerHTML += productoTarjeta;
        });

        // Agregar un evento de clic a los botones "Reservar Turno"
        const botonesReservar = document.querySelectorAll(".btnAgregar");
        botonesReservar.forEach((boton) => {
            boton.addEventListener("click", (event) => {
                event.preventDefault();
                const servicioSeleccionado = event.target.getAttribute("data-servicio");
                mostrarFormulario(servicioSeleccionado);
            });
        });
    }

    crearTemplate();

    const formulario = document.getElementById("formulario");
    const btnCancelar = document.getElementById("btnCancelar");

    btnCancelar.addEventListener("click", () => {
        ocultarFormulario();
    });

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        mostrarTarjetaFinalizacion();
    });

    function mostrarFormulario(servicio) {
        formulario.classList.remove("ocultar");
        // Actualizar el campo de servicio en el formulario
        document.getElementById("inputServicio").value = servicio;
    }

    function ocultarFormulario() {
        formulario.reset();
        formulario.classList.add("ocultar");
        tarjetaFinalizacion.classList.add("ocultar");
    }

    function mostrarTarjetaFinalizacion() {
        const servicioSeleccionado = document.getElementById("inputServicio").value;
        
        // Actualizar la tarjeta de finalización con el mensaje y la imagen de la sesión seleccionada
        const mensajeFinalizacion = `¡Reserva completada para la sesión de ${servicioSeleccionado}!`;

        tarjetaFinalizacion.innerHTML = `
            <h2>${mensajeFinalizacion}</h2>
        `;

        tarjetaFinalizacion.classList.remove("ocultar");
    }
});
