const title = `<div>
    <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>';">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
    </nav>
    <h5>{{title}}</h5>
</div>`;

Vue.component('title-page', {
    props: ['title'],
    template: title
});