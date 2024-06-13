// pnotifyConfig.js

import PNotify from 'pnotify';

// Configuración global de PNotify
PNotify.defaults.width = '300px';

// Función para mostrar una burbuja de chat
export function mostrarBurbujaChat(mensaje) {
    PNotify.notice({
        title: 'Chat',
        text: mensaje,
        icon: 'fas fa-comment-alt',
        modules: {
            Buttons: {
                closer: true,
                closerHover: true,
                sticker: false
            }
        }
    });
}

// Otras configuraciones y funciones necesarias
