document.getElementById('downloadButton').addEventListener('click', function() {
    // Ruta relativa al PDF en tu proyecto
    const cvPath = 'CV-Andrés_tics.pdf';
    
    // Crear un elemento temporal de enlace
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'CV-Andrés_tics.pdf'; // Nombre con el que se descargará
    
    // Configuraciones adicionales
    link.style.display = 'none';
    document.body.appendChild(link);
    
    // Realizar la descarga
    link.click();
    
    // Limpiar
    document.body.removeChild(link);
});