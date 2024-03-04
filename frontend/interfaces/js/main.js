const table = document.getElementById('data-table');
const form = document.getElementById('data-form');
const paginationInfo = document.getElementById('pagination-info');
const nextButton = document.getElementById('next-button');

const itemsPerPage = 9; // Número de filas por página
let currentPage = 1; // Página actual

// Función para mostrar las filas correspondientes a la página actual
function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const rows = Array.from(table.getElementsByTagName('tr'));

    rows.forEach((row, index) => {
        if (index >= start && index < end) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}

// Función para actualizar la información de paginación
function updatePaginationInfo() {
    const totalRows = table.getElementsByTagName('tr').length - 1; // Restar 1 para excluir la fila de encabezado
    const totalPages = Math.ceil(totalRows / itemsPerPage);

    paginationInfo.textContent = `Página ${currentPage} de ${totalPages}.`;
}

// Función para manejar el clic en el botón "Anterior"
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
        updatePaginationInfo();
    }
}

// Función para manejar el clic en el botón "Siguiente"
function nextPage() {
    const totalRows = table.getElementsByTagName('tr').length - 1; // Restar 1 para excluir la fila de encabezado
    const totalPages = Math.ceil(totalRows / itemsPerPage);

    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
        updatePaginationInfo();
    }
}

// Inicializar la paginación
showPage(currentPage);
updatePaginationInfo();

// Separar la tabla en secciones cada 3 filas y eliminar columnas en blanco
const rows = Array.from(table.getElementsByTagName('tr'));
rows.forEach((row, index) => {
    if (index % 3 === 0) {
        row.style.pageBreakBefore = 'always'; // Agregar salto de página cada 3 filas
    }

    const cells = row.getElementsByTagName('td');
    cells.forEach((cell) => {
        if (cell.innerHTML.trim() === '') {
            cell.style.display = 'none'; // Ocultar celdas en blanco
        }
    });
});
