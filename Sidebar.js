const nav = `<nav class="nav flex-column border col-2" style="font-size: 10pt; height: 100%; padding-right: 0px">
        <div class="mt-5 mb-5" align="center">
            Logo
        </div>
        <a class="nav-link" href="List/index.html">
            <i class="far fa-user"></i> 
            Administradores 
        </a>
        <a class="nav-link" href="#">
            <i class="far fa-list-alt"></i>
            Catalagos
        </a>
        <a class="nav-link" href="#">
            <i class="fas fa-users"></i> Lideres
        </a>
        <a class="nav-link" href="#">
            <i class="fas fa-shopping-bag"></i>
            Usuarios
        </a>
        <a class="nav-link" href="#">
            <i class="fas fa-users"></i>
            Mi empresa
        </a>
        <a class="nav-link" href="#">
            <i class="fas fa-apple-alt"></i>
            Cursos
        </a>
        <a class="nav-link" href="#">
            <i class="fas fa-shopping-bag"></i>
            Recompensas
        </a>
        <a class="nav-link" href="#">
            <i class="far fa-calendar-alt"></i>
            Eventos
        </a>
        <a class="nav-link" href="#">
            <i class="fas fa-exclamation-triangle"></i>
            Notificaciones
        </a>
        <a class="nav-link" href="#">
            <i class="fas fa-chart-line"></i>
            Reportes
        </a>
        <div style="margin-top: 120%; ">
            <div class="card p-1 mr-2">
                Necesitas ayuda <br>
                <a href="#">ir a la seccion de ayuda</a>
            </div>
            Copyright GLI 2021
        </div>
    </nav>`;

Vue.component('nav-bar', {
    data: function () {
        return {
            count: 0
        }
    },
    template: nav
});