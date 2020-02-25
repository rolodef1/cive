<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header">Formulario de búsqueda</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="buscar">Buscar<span class="required">*</span></label>
              <input type="search" class="form-control" id="buscar" required aria-describedby="buscarHelp">
              <small id="buscarHelp" class="form-text text-muted">Ingresa lo que deseas buscar</small>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-orange">Buscar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Busqueda'
}
</script>
