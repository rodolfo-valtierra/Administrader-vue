
const editAndShow  = {
    show: `<div class="container mt-3">
            <title-page title="Perfil de administrador"></title-page>
            <div>
                <img src="../user-default.jpg" style="width: 5rem; border-radius: 100px" />
            </div>
            <div class="mt-2 mb-4">
                <h6>{{user.nombre +' '+ user.apellidos}}</h6>
            </div>
            <div class="row col-8">
                <div v-for="(u, i) in user" class="col-4">
                    <label class="form-label text-uppercase" style="color: gray; font-size: 9pt" >
                        {{i=='nombre'?i+' (s)':i}}
                    </label>
                    <h6>
                        {{u}}
                    </h6>
                </div>
            </div>
            <div class="mt-3">
                <button class="btn text-light" style="background-color: #04B4AE" >Editar administrador</button>
            </div>
        </div>`,
    edit: `<div class="container mt-3">
            <title-page title="Editar administrador" ></title-page>
            <div>
                <label>Sube tu fotografia con un peso menos de 2mb</label>
                <div class="border col-2" align="center" style="border-radius: 5px">
                    <img class="col" src="../user-default.jpg" style="width: 8rem" />
                    <div class="mt-1 mb-2">
                        <label style="font-size: 8pt; width: 100%" >Arrastra tu archivo</label>
                        <button class="mt-2 btn btn-sm btn-outline-info">Seleccionar</button>
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <div v-for="(u, i) in user" class="col-4">
                    <label class="form-label text-uppercase" style="color: gray; font-size: 9pt" >
                        {{i=='nombre'?i+' (s)':i}}
                    </label>
                    <input class="form-control" :placeholder="u" >
                </div>
            </div>
            <div class="mt-5">
                <button class="btn btn-outline-info text-dark" style="margin-right: 1rem" >Cancelar</button>
                <button class="btn text-light" style="background-color: #04B4AE" >Guardar cambios</button>
            </div>
        </div>`
};

const main = `<div>
    <div v-if="action=='edit'">
        ${editAndShow.edit}
    </div>
    <div v-if="action=='show'" >
        ${editAndShow.show}
    </div>
    <div v-else ></div>
</div>`


Vue.component('show-page', {
    template: main,
    data: function () {
        return {
            user: {},
            action: ''
        }
    },
    beforeMount: function() {
        const params = new URLSearchParams(window.location.search);
        let user = {...users[params.get('index')]};
        user.Estatus = user.activo?'Activo': 'Inactivo';
        delete user.activo

        this.user = user;
        this.action = params.get('action');
        console.log(this.action)
    }
})