// diccionarios
const subcategorias = {
    plastico: ["Botellas", "Envases", "Bolsas"],
    papel: ["Periodicos", "Carton", "Papel de oficina"],
    vidrio: ["Botellas", "Frascos", "Cristaleria"],
    metales: ["Latas", "Cables", "Electrodomesticos pequeños"],
    electronicos: ["Telefonos moviles", "Baterias", "Componentes de computadoras"]
};

// actualizar subcategorias 
document.getElementById('tipoResiduo').addEventListener('change', function() {
    const tipoSeleccionado = this.value;
    const subcategoriaSelect = document.getElementById('subcategoriaResiduo');
    
    // limpiar las opciones actuales
    subcategoriaSelect.innerHTML = '<option value="">Seleccione una subcategoría</option>';

    if (subcategorias[tipoSeleccionado]) {
        // añadir las nuevas subcategorias
        subcategorias[tipoSeleccionado].forEach(function(subcategoria) {
            const option = document.createElement('option');
            option.textContent = subcategoria;
            subcategoriaSelect.appendChild(option);
        });
    }
});

document.getElementById('formulario_reciclaje').addEventListener('submit', function(event) {
    alert("Formulario enviado correctamente");
});
