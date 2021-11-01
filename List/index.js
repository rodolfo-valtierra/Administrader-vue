const list = `<div class="container">
    <div class="mt-3">
        <title-page title="Administrador de la consola" ></title-page>
    </div>
    <div>
        <div class="row">
            <div class="col">
                <input class="form-control" placeholder="buscar" />
            </div>
            <button class="btn btn-light col-1" >Buscar</button>
            <div class="dropdown col-2">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-filter"></i>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                    <a class="dropdown-item" href="#">Action</a>
                    </li>
                </ul>
            </div>
            <div class="col float-end">
                <button class="btn border border-info">Descargar</button>        
                <button class="btn" style="color: white; background-color: #04B4AE" >Agregar nuevo admin</button>        
            </div>
        </div>
    </div>
    <div class="table-responsive-md">
        <table class="table">
            <thead>
                <tr class="align-middle">
                    <th>
                        <input class="form control" type="checkbox" />
                    </th>
                    <th>
                        Administradores
                    </th>
                    <th> Area </th>
                    <th>Correo electronico</th>
                    <th>Estatus</th>
                    <th>Detalles</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index" class="align-middle" >
                    <td> <input class="form control" type="checkbox" /> </td>
                    <td style="width: 25rem" >
                        <img src="user-default.jpg" style="width: 7%; border-radius: 100px"/> 
                        {{user.nombre + ' '+ user.apellidos}}
                    </td>
                    <td> {{user.area}} </td>
                    <td> {{user.correo}} </td>
                    <td> {{user.activo}}</td>
                    <td class="row" style="width: 5rem" > 
                        <a :href="'Perfil/index.html?index='+index+'&action=edit'" class="btn btn-sm col-4" >
                            <i class="far fa-edit text-info">
                            </i> 
                        </a>
                        <button class="btn btn-sm text-danger col-4" >
                            <i class="far fa-trash-alt"></i> 
                        </button>
                        <a :href="'Perfil/index.html?index='+index+'&action=show'"class="btn btn-sm text-dark col-4" > 
                            <i class="far fa-eye"></i>
                        </a>
                     </td>
                </tr>
            </tbody>
        </table>
        <div class="d-flex flex-row-reverse" style="font-size: 8pt">
            <button class="btn" ><i class="fas fa-chevron-right"></i></button>
            <button class="btn" ><i class="fas fa-chevron-left"></i></button>
            <div style="margin-left: 2rem">
                <label class="m-2">1-10 of 100</label>
            </div>
            <div class="row" >
                <span class="col-7 mt-2">Rows per page</span>
                <select class="col form-select form-select-sm">
                    <option selected value="5">5</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
    </div>
</div>`;

Vue.component('list-user',{
    template: list,
    data: function () {
        return {
            users
        }
    },
})