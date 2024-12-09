import os

def CrearArchivoSiNoExiste(filename):
    try:
        if not os.path.exists(filename):
            with open(filename, 'w') as file:
                file.write("")
    except Exception as e:
        print(f"Error al verificar o crear el archivo: {e}")

def Escribir(filename, content):
    try:
        with open(filename, 'a') as file:
            file.write(content + "\n")
    except Exception as e:
        print(f"Error al escribir en el archivo: {e}")

def LeerArchivo(filename):
    try:
        with open(filename, 'r') as file:
            return file.readlines()
    except FileNotFoundError:
        print("El archivo no existe.")
        return []
    except Exception as e:
        print(f"Error al leer el archivo: {e}")
        return []

def CrearUsuario(filename, nombre, correo, contrasena, direccion, telefono):
    content = f"{nombre};{correo};{contrasena};{direccion};{telefono}"
    Escribir(filename, content)

def BuscarUsuarioPorCorreoYContrasena(filename, correo, contrasena):
    usuarios = LeerArchivo(filename)
    for usuario in usuarios:
        datos = usuario.strip().split(";")
        if len(datos) >= 3 and datos[1] == correo and datos[2] == contrasena:
            return True
    return False

def BuscarUsuarioPorCorreo(filename, correo):
    usuarios = LeerArchivo(filename)
    for usuario in usuarios:
        datos = usuario.strip().split(";")
        if len(datos) >= 2 and datos[1] == correo:
            return datos
    return None

def main():
    filename = "usuarios.txt"
    CrearArchivoSiNoExiste(filename)

    # Ejemplo de creación de usuario
    #CrearUsuario(filename, "Juan Perez", "juan@example.com", "1234", "Calle Falsa 123", "555-1234")
    #CrearUsuario(filename, "Maria Lopez", "maria@example.com", "abcd", "Avenida Real 456", "555-5678")

    # Buscar usuario por correo y contrasena
    #existe = BuscarUsuarioPorCorreoYContrasena(filename, "juan@example.com", "1234")
    #print(f"Usuario encontrado para inicio de sesión: {existe}")

    # Buscar usuario por correo
    #datos = BuscarUsuarioPorCorreo(filename, "maria@example.com")
    #if datos:
    #    print("Datos del usuario encontrado:")
    #    print(f"Nombre: {datos[0]}\nCorreo: {datos[1]}\nContrasena: {datos[2]}\nDirección: {datos[3]}\nTeléfono: {datos[4]}")
    #else:
    #    print("Usuario no encontrado.")

if __name__ == "__main__":
    main()
