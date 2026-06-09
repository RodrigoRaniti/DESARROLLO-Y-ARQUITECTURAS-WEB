const fields = [
    'nombreCompleto',
    'email',
    'password',
    'repetirPassword',
    'edad',
    'telefono',
    'direccion',
    'ciudad',
    'codigoPostal',
    'dni'
];

const validators = {
    nombreCompleto: function(value) {
        if (value.length <= 6) {
            return 'El nombre debe tener mas de 6 letras';
        }
        if (!value.includes(' ')) {
            return 'Debe tener al menos un espacio';
        }
        return '';
    },

    email: function(value) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value)) {
            return 'El email no tiene un formato valido';
        }
        return '';
    },

    password: function(value) {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!regex.test(value)) {
            return 'La contraseña debe tener al menos 8 caracteres, letras y numeros';
        }
        return '';
    },

    repetirPassword: function(value) {
        const password = document.getElementById('password').value;
        if (value !== password) {
            return 'Las contraseñas deben ser iguales';
        }
        return '';
    },

    edad: function(value) {
        const edad = Number(value);
        if (!Number.isInteger(edad) || edad < 18) {
            return 'La edad debe ser un numero entero mayor o igual a 18';
        }
        return '';
    },

    telefono: function(value) {
        const regex = /^\d{7,}$/;
        if (!regex.test(value)) {
            return 'El telefono debe tener al menos 7 digitos sin espacios ni guiones';
        }
        return '';
    },

    direccion: function(value) {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*\s).{5,}$/;
        if (!regex.test(value)) {
            return 'La direccion debe tener letras, numeros y un espacio';
        }
        return '';
    },

    ciudad: function(value) {
        if (value.length < 3) {
            return 'La ciudad debe tener al menos 3 caracteres';
        }
        return '';
    },

    codigoPostal: function(value) {
        if (value.length < 3) {
            return 'El codigo postal debe tener al menos 3 caracteres';
        }
        return '';
    },

    dni: function(value) {
        const regex = /^\d{7,8}$/;
        if (!regex.test(value)) {
            return 'El DNI debe tener 7 u 8 digitos';
        }
        return '';
    }
};

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById('error-' + fieldId);

    field.classList.add('error');
    errorDiv.textContent = message;
}

function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById('error-' + fieldId);

    field.classList.remove('error');
    errorDiv.textContent = '';
}

function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();

    if (value === '') {
        showError(fieldId, 'Este campo es obligatorio');
        return false;
    }

    const error = validators[fieldId](value);

    if (error !== '') {
        showError(fieldId, error);
        return false;
    }

    clearError(fieldId);
    return true;
}

fields.forEach(function(fieldId) {
    const field = document.getElementById(fieldId);

    field.addEventListener('blur', function() {
        validateField(fieldId);
    });

    field.addEventListener('focus', function() {
        clearError(fieldId);
    });
});

document.getElementById('nombreCompleto').addEventListener('keydown', function() {
    setTimeout(function() {
        const nombre = document.getElementById('nombreCompleto').value.trim();
        const titulo = document.getElementById('dynamicTitle');

        if (nombre !== '') {
            titulo.textContent = 'HOLA ' + nombre.toUpperCase();
        } else {
            titulo.textContent = 'HOLA';
        }
    }, 0);
});

document.getElementById('nombreCompleto').addEventListener('focus', function() {
    const nombre = document.getElementById('nombreCompleto').value.trim();
    if (nombre !== '') {
        document.getElementById('dynamicTitle').textContent = 'HOLA ' + nombre.toUpperCase();
    }
});

document.getElementById('mainForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let errores = [];
    let datos = [];

    fields.forEach(function(fieldId) {
        const field = document.getElementById(fieldId);
        const label = document.querySelector('label[for="' + fieldId + '"]').textContent;

        if (!validateField(fieldId)) {
            const error = document.getElementById('error-' + fieldId).textContent;
            errores.push(label + ': ' + error);
        } else {
            datos.push(label + ': ' + field.value);
        }
    });

    if (errores.length > 0) {
        alert('Hay errores en el formulario:\n\n' + errores.join('\n'));
    } else {
        alert('Formulario enviado correctamente:\n\n' + datos.join('\n'));
    }
});
