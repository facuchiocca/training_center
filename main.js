// Validación y Envío del Formulario de Contacto (Paso Funcional)
const form = document.querySelector('.cyber-form');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evita que la página parpadee o se recargue
        
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        
        // Efecto visual de carga cyberpunk
        btn.innerHTML = 'PROCESANDO ACCESO... <i class="fas fa-spinner fa-spin"></i>';
        btn.style.pointerEvents = 'none';
        btn.style.opacity = '0.7';
        
        // Enviar datos reales a la API de Formspree
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                // Éxito total
                alert('¡SOLICITUD RECIBIDA CON ÉXITO!\n\nTu matrícula provisoria quedó congelada en el sistema de la Red TC. Un asesor se comunicará con vos por WhatsApp a la brevedad para coordinar tu pase libre.');
                form.reset(); // Limpia los campos
            } else {
                // Error del servidor
                alert('Hubo un problema temporal con el servidor de registros. Por favor, intentalo de nuevo o contactanos directo por WhatsApp.');
            }
        } catch (error) {
            // Error de conexión a internet
            alert('Error de red. Verificá tu conexión a internet e intentalo de nuevo.');
        } finally {
            // Reestablecer el botón a su estado original
            btn.innerHTML = originalText;
            btn.style.pointerEvents = 'auto';
            btn.style.opacity = '1';
        }
    });
}
