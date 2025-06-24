# Rick y Morty - Explorador de Personajes

Este es un pequeño proyecto web desarrollado con **Vue.js**, **Axios** y **Bootstrap** que consume la API pública de [Rick and Morty](https://rickandmortyapi.com/) para mostrar información sobre personajes y locaciones.

## 🖼️ Vista previa

![Rick y Morty UI](./img/morty3.png)

## 🚀 Características

- Navegación entre páginas de personajes (`Siguiente` / `Anterior`).
- Visualización de locaciones.
- Interfaz responsiva usando Bootstrap 5.
- Llamadas a API con Axios.
- Estilos personalizados en `index.css`.

## 🧠 Tecnologías utilizadas

- [Vue.js 2](https://vuejs.org/v2/)
- [Axios](https://axios-http.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- HTML5 + CSS3

## 📁 Estructura del proyecto

📁 tu-proyecto/
├── index.html # Página principal
├── index.css # Estilos personalizados
├── componente.js # Lógica Vue.js con Axios
└── img/
└── morty3.png # Imagen del logo Rick y Morty

## 📸 Créditos

- API: [https://rickandmortyapi.com/](https://rickandmortyapi.com/)
- Imágenes y personajes © Adult Swim / Rick and Morty

---

⠀⠀⠀⠀⢀⣀⣀⡀⠀⠀⠀⠀⠀⠀⣀⣤⣴⠶⠿⠛⠛⠛⠛⠛⠛⠿⠷⣶⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣠⡾⠟⠛⠛⠛⠿⣦⣄⠀⣠⣴⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⢷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣼⠀⠀⠀⠀⠀⠀⠈⢙⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢰⣿⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠙⢿⣦⠀⠀⠀⠀⠀⠀⠀
⢸⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡎⠉⢱⡀⠀⠀⠀⠀⡜⠁⠹⡄⠀⠀⠀⠀⠀⠀⠀⠹⣷⡀⠀⠀⠀⠀⠀
⠈⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⡇⠀⠀⠀⢰⡇⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣷⠀⠀⠀⠀⠀
⠀⢹⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣶⣿⡇⠀⠀⠀⢸⣶⣾⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣧⠀⠀⠀⠀⠀
⠀⢻⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⠸⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣆⠀⠀⠀⠀
⠀⠀⠀⠹⣷⡴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⠁⠀⠀⠀⠀⢿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣷⡀⠀⠀
⠀⠀⠀⢸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠁⢠⣶⣶⣶⣦⠈⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡀⠀
⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣏⠀⢈⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣇⠀
⠀⠀⠀⠀⠘⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀
⠀⠀⠀⠀⠀⢹⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡟⠀
⠀⠀⠀⠀⠀⢿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⠀⠀⠀⣀⣴⡿⠁⠀
⠀⠀⠀⠀⠀⠀⣸⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣨⣿⣿⡛⠉⠀⠀⠀
⠀⠀⠀⢀⣴⠋⠁⠙⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠏⠈⠙⠻⣶⣄⠀⠀⠀
⠀⢀⣴⣿⣯⣴⡆⠀⠀⠀⠙⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠁⠀⠀⢰⣶⣬⣷⡀⠀
⠀⣾⠏⢸⣿⠿⠃⠀⠀⠀⠀⠀⠙⠳⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠶⠋⠀⠀⠀⠀⠀⠈⠻⢿⡿⠹⣿⡀
⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠲⢦⣤⣤⣀⣀⢀⣀⣠⣤⣤⠶⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⡇
⠀⠻⣷⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣬⣿⠟⠛⠻⣿⣯⣥⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣴⡿⠃
⠀⠀⠀⠛⠛⠿⠿⠶⠶⠶⠶⠶⠿⠿⠟⠛⠛⠋⠉⠀⠀⠀⠀⠀⠉⠉⠛⠛⠻⠿⠿⠿⠶⠶⠶⠶⠾⠿⠛⠛⠋⠁⠀
[Sttefros 2025]
