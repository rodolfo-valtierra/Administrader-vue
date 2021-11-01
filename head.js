const head = `<div class="d-flex flex-row-reverse col-12" 
        style="height: 4rem; background-color: #04B4AE; color: white; padding-right: 4rem; width: 100%">
        <div class="d-flex flex-row mt-1">
            <button class="btn" style="color: white">
                <i class="fas fa-search"></i>
            </button>
            <div class="d-flex justify-content-between mt-1">
                <div class="pt-2 p-2" >
                    <i class="far fa-circle" style="font-size: 2em;"></i>
                </div>
                <p class="pt-2" style="font-size: 8pt">
                    Adrian steban<br>
                    Recursos humanos
                </p>
            </div>
            <button class="btn p-3" style="width: 5rem; color: white">
                <i class="fas fa-sign-out-alt"></i>
            </button>
        </div>
    </div>`;

Vue.component('head-comp', {
    template: head
})